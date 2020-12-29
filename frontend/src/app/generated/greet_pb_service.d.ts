// package: greet
// file: greet.proto

import * as greet_pb from "./greet_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GreetServiceSayHello = {
  readonly methodName: string;
  readonly service: typeof GreetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof greet_pb.Greeting;
};

type GreetServiceGetGreeting = {
  readonly methodName: string;
  readonly service: typeof GreetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof greet_pb.GetGreetingRequest;
  readonly responseType: typeof greet_pb.Greeting;
};

export class GreetService {
  static readonly serviceName: string;
  static readonly SayHello: GreetServiceSayHello;
  static readonly GetGreeting: GreetServiceGetGreeting;
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

export class GreetServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: greet_pb.Greeting|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: greet_pb.Greeting|null) => void
  ): UnaryResponse;
  getGreeting(
    requestMessage: greet_pb.GetGreetingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: greet_pb.Greeting|null) => void
  ): UnaryResponse;
  getGreeting(
    requestMessage: greet_pb.GetGreetingRequest,
    callback: (error: ServiceError|null, responseMessage: greet_pb.Greeting|null) => void
  ): UnaryResponse;
}

