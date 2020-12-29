// package: echo
// file: echo.proto

import * as echo_pb from "./echo_pb";
import * as api_pb from "./api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EchoServiceHealth = {
  readonly methodName: string;
  readonly service: typeof EchoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.Empty;
  readonly responseType: typeof echo_pb.EchoResponse;
};

type EchoServiceGetEcho = {
  readonly methodName: string;
  readonly service: typeof EchoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof echo_pb.EchoRequest;
  readonly responseType: typeof echo_pb.EchoResponse;
};

type EchoServiceGetEchoStream = {
  readonly methodName: string;
  readonly service: typeof EchoService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof echo_pb.EchoRequest;
  readonly responseType: typeof echo_pb.EchoResponse;
};

export class EchoService {
  static readonly serviceName: string;
  static readonly Health: EchoServiceHealth;
  static readonly GetEcho: EchoServiceGetEcho;
  static readonly GetEchoStream: EchoServiceGetEchoStream;
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

export class EchoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  health(
    requestMessage: api_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: echo_pb.EchoResponse|null) => void
  ): UnaryResponse;
  health(
    requestMessage: api_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: echo_pb.EchoResponse|null) => void
  ): UnaryResponse;
  getEcho(
    requestMessage: echo_pb.EchoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: echo_pb.EchoResponse|null) => void
  ): UnaryResponse;
  getEcho(
    requestMessage: echo_pb.EchoRequest,
    callback: (error: ServiceError|null, responseMessage: echo_pb.EchoResponse|null) => void
  ): UnaryResponse;
  getEchoStream(metadata?: grpc.Metadata): BidirectionalStream<echo_pb.EchoRequest, echo_pb.EchoResponse>;
}

