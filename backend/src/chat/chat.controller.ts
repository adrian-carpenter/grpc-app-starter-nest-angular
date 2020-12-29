import { Controller, UseInterceptors } from '@nestjs/common'
import { LoggerInterceptor } from '../interceptors/logger.interceptor'
import { GrpcMethod } from '@nestjs/microservices'
import { grpc } from '@improbable-eng/grpc-web'
import Metadata = grpc.Metadata
import { Observable, Subject } from 'rxjs'
import { Empty, StatusResponse } from '../generated/api_pb'
import { ChatUtils } from './chat.utils'
import {
  ConnectionsListResponse,
  ConnectionStream,
  MessageListResponse,
  MessageStream,
} from './models/chat.api'
import { ConnectRequest, Message } from '../generated/chat_pb'

@UseInterceptors(LoggerInterceptor)
@Controller('chat')
export class ChatController {
  private users = ChatUtils.createChannelUsers()
  private messages: Message.AsObject[] = []
  private connections$: ConnectionStream[] = []
  private messages$: MessageStream[] = []

  @GrpcMethod('ChatService', 'GetConnections')
  getConnections(
    req: ConnectRequest.AsObject,
    meta: Metadata,
  ): ConnectionsListResponse {
    // Assign as active in DB
    const user = ChatUtils.createUser(req.userId)
    this.users.push(user)
    const res = new ConnectionsListResponse()
    res.setUsers(this.users)
    this.connections$.forEach((c) => c.subject.next(res))
    return res
  }

  @GrpcMethod('ChatService', 'GetConnectionStream')
  getConnectionStream(
    req: ConnectRequest.AsObject,
    meta: Metadata,
  ): Observable<ConnectionsListResponse> {
    const connectionList$ = new Subject<ConnectionsListResponse>()
    this.connections$.push({
      user_id: req.userId,
      subject: connectionList$,
    })
    return connectionList$.asObservable()
  }

  @GrpcMethod('ChatService', 'GetChatStream')
  getChatStream(
    req: ConnectRequest.AsObject,
    meta: Metadata,
  ): Observable<MessageListResponse> {
    // Assign as active in DB
    const messages$ = new Subject<MessageListResponse>()
    this.messages$.push({
      user_id: req.userId,
      subject: messages$,
    })
    return messages$.asObservable()
  }

  @GrpcMethod('ChatService', 'UpdateChannel')
  updateChannel(
    req: Message.AsObject,
    meta: Metadata,
  ): StatusResponse.AsObject {
    this.messages.push(req)
    const next = new MessageListResponse()
    next.setMessages(this.messages)
    this.messages$.forEach((c) => c.subject.next(next))
    const res = new StatusResponse()
    res.setMessage('Message sent successfully')
    return res.toObject()
  }

  @GrpcMethod('ChatService', 'UpdateConnection')
  updateConnection(
    req: ConnectRequest.AsObject,
    meta: Metadata,
  ): StatusResponse.AsObject {
    this.users = this.users.map((u) => {
      if (u.id === req.userId) {
        return {
          ...u,
          active: req.active,
        }
      }
    })
    this.messages$ = this.messages$.filter((ms) => ms.user_id !== req.userId) // Remove active message stream
    this.connections$ = this.connections$.filter(
      (ms) => ms.user_id !== req.userId,
    ) // Remove active connection stream
    const next = new ConnectionsListResponse()
    next.setUsers(this.users)
    this.connections$.forEach((c) => c.subject.next(next)) // Notify active
    const res = new StatusResponse()
    res.setMessage(`${req.userId} is now offline`)
    return res.toObject()
  }
}
