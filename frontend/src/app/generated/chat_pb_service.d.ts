// package: chat
// file: chat.proto

import * as chat_pb from "./chat_pb";
import * as api_pb from "./api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceGetConnections = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.ConnectRequest;
  readonly responseType: typeof chat_pb.ConnectionsResponse;
};

type ChatServiceGetConnectionStream = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.ConnectRequest;
  readonly responseType: typeof chat_pb.ConnectionsStreamResponse;
};

type ChatServiceGetChatStream = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.ConnectRequest;
  readonly responseType: typeof chat_pb.ChatStreamResponse;
};

type ChatServiceUpdateChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.Message;
  readonly responseType: typeof api_pb.StatusResponse;
};

type ChatServiceUpdateConnection = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.ConnectRequest;
  readonly responseType: typeof api_pb.StatusResponse;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly GetConnections: ChatServiceGetConnections;
  static readonly GetConnectionStream: ChatServiceGetConnectionStream;
  static readonly GetChatStream: ChatServiceGetChatStream;
  static readonly UpdateChannel: ChatServiceUpdateChannel;
  static readonly UpdateConnection: ChatServiceUpdateConnection;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getConnections(
    requestMessage: chat_pb.ConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.ConnectionsResponse|null) => void
  ): UnaryResponse;
  getConnections(
    requestMessage: chat_pb.ConnectRequest,
    callback: (error: ServiceError|null, responseMessage: chat_pb.ConnectionsResponse|null) => void
  ): UnaryResponse;
  getConnectionStream(requestMessage: chat_pb.ConnectRequest, metadata?: grpc.Metadata): ResponseStream<chat_pb.ConnectionsStreamResponse>;
  getChatStream(requestMessage: chat_pb.ConnectRequest, metadata?: grpc.Metadata): ResponseStream<chat_pb.ChatStreamResponse>;
  updateChannel(
    requestMessage: chat_pb.Message,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatusResponse|null) => void
  ): UnaryResponse;
  updateChannel(
    requestMessage: chat_pb.Message,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatusResponse|null) => void
  ): UnaryResponse;
  updateConnection(
    requestMessage: chat_pb.ConnectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatusResponse|null) => void
  ): UnaryResponse;
  updateConnection(
    requestMessage: chat_pb.ConnectRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatusResponse|null) => void
  ): UnaryResponse;
}

