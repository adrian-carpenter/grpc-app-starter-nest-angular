// package: hero
// file: hero.proto

import * as hero_pb from "./hero_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HeroServiceGetHero = {
  readonly methodName: string;
  readonly service: typeof HeroService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hero_pb.GetHeroRequest;
  readonly responseType: typeof hero_pb.Hero;
};

export class HeroService {
  static readonly serviceName: string;
  static readonly GetHero: HeroServiceGetHero;
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

export class HeroServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getHero(
    requestMessage: hero_pb.GetHeroRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hero_pb.Hero|null) => void
  ): UnaryResponse;
  getHero(
    requestMessage: hero_pb.GetHeroRequest,
    callback: (error: ServiceError|null, responseMessage: hero_pb.Hero|null) => void
  ): UnaryResponse;
}

