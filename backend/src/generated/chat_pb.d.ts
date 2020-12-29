// package: chat
// file: chat.proto

import * as jspb from 'google-protobuf'
import * as users_pb from './users_pb'
import * as api_pb from './api_pb'

export class ConnectRequest extends jspb.Message {
  getUserId(): number
  setUserId(value: number): void

  getActive(): boolean
  setActive(value: boolean): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ConnectRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ConnectRequest,
  ): ConnectRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ConnectRequest,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ConnectRequest
  static deserializeBinaryFromReader(
    message: ConnectRequest,
    reader: jspb.BinaryReader,
  ): ConnectRequest
}

export namespace ConnectRequest {
  export type AsObject = {
    userId: number
    active: boolean
  }
}

export class ConnectionsStreamResponse extends jspb.Message {
  clearUsersList(): void
  getUsersList(): Array<users_pb.User>
  setUsersList(value: Array<users_pb.User>): void
  addUsers(value?: users_pb.User, index?: number): users_pb.User

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ConnectionsStreamResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ConnectionsStreamResponse,
  ): ConnectionsStreamResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ConnectionsStreamResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ConnectionsStreamResponse
  static deserializeBinaryFromReader(
    message: ConnectionsStreamResponse,
    reader: jspb.BinaryReader,
  ): ConnectionsStreamResponse
}

export namespace ConnectionsStreamResponse {
  export type AsObject = {
    usersList: Array<users_pb.User.AsObject>
  }
}

export class ConnectionsResponse extends jspb.Message {
  clearUsersList(): void
  getUsersList(): Array<users_pb.User>
  setUsersList(value: Array<users_pb.User>): void
  addUsers(value?: users_pb.User, index?: number): users_pb.User

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ConnectionsResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ConnectionsResponse,
  ): ConnectionsResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ConnectionsResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ConnectionsResponse
  static deserializeBinaryFromReader(
    message: ConnectionsResponse,
    reader: jspb.BinaryReader,
  ): ConnectionsResponse
}

export namespace ConnectionsResponse {
  export type AsObject = {
    usersList: Array<users_pb.User.AsObject>
  }
}

export class ChatStreamResponse extends jspb.Message {
  clearMessagesList(): void
  getMessagesList(): Array<Message>
  setMessagesList(value: Array<Message>): void
  addMessages(value?: Message, index?: number): Message

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ChatStreamResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: ChatStreamResponse,
  ): ChatStreamResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: ChatStreamResponse,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): ChatStreamResponse
  static deserializeBinaryFromReader(
    message: ChatStreamResponse,
    reader: jspb.BinaryReader,
  ): ChatStreamResponse
}

export namespace ChatStreamResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>
  }
}

export class Channel extends jspb.Message {
  getId(): number
  setId(value: number): void

  getName(): string
  setName(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Channel.AsObject
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Channel,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): Channel
  static deserializeBinaryFromReader(
    message: Channel,
    reader: jspb.BinaryReader,
  ): Channel
}

export namespace Channel {
  export type AsObject = {
    id: number
    name: string
  }
}

export class Message extends jspb.Message {
  getId(): number
  setId(value: number): void

  getContent(): string
  setContent(value: string): void

  getTimestamp(): string
  setTimestamp(value: string): void

  getUserId(): number
  setUserId(value: number): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Message.AsObject
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Message,
    writer: jspb.BinaryWriter,
  ): void
  static deserializeBinary(bytes: Uint8Array): Message
  static deserializeBinaryFromReader(
    message: Message,
    reader: jspb.BinaryReader,
  ): Message
}

export namespace Message {
  export type AsObject = {
    id: number
    content: string
    timestamp: string
    userId: number
  }
}
