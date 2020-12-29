import { User } from '../../generated/users_pb'
import { Subject } from 'rxjs'
import { Message } from '../../generated/chat_pb'

export class ConnectionsListResponse {
  private users: User.AsObject[]

  public getUsers() {
    return this.users
  }

  public setUsers(users: User.AsObject[]) {
    this.users = users
  }
}

export class MessageListResponse {
  private messages: Message.AsObject[]

  public getMessages() {
    return this.messages
  }

  public setMessages(messages: Message.AsObject[]) {
    this.messages = messages
  }
}

export interface ConnectionStream {
  user_id: number
  subject: Subject<ConnectionsListResponse>
}

export interface MessageStream {
  user_id: number
  subject: Subject<MessageListResponse>
}
