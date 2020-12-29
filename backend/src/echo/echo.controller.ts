import { Controller, UseInterceptors } from '@nestjs/common'
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices'
import { Observable, Subject } from 'rxjs'
import { EchoRequest, EchoResponse } from '../generated/echo_pb'
import { Empty } from '../generated/api_pb'
import { grpc } from '@improbable-eng/grpc-web'
import Metadata = grpc.Metadata
import { LoggerInterceptor } from '../interceptors/logger.interceptor'
import { ErrorsInterceptor } from '../interceptors/errors.interceptor'

@UseInterceptors(LoggerInterceptor, ErrorsInterceptor)
@Controller('echo')
export class EchoController {
  private readonly echos: EchoResponse.AsObject[] = [
    { id: 0, message: 'Hello' },
    { id: 1, message: 'World' },
    { id: 2, message: 'Grpc' },
    { id: 3, message: 'App' },
    { id: 4, message: '😃' },
  ]

  @GrpcMethod('EchoService', 'Health')
  health(req: Empty.AsObject, metaData: Metadata): EchoResponse.AsObject {
    return {
      id: 0,
      message: 'All Systems Go!',
    }
  }

  @GrpcMethod('EchoService', 'GetEcho')
  getEcho(
    req: EchoRequest.AsObject,
    metaData: Metadata,
  ): EchoResponse.AsObject {
    return {
      id: 0,
      message: `Received: ${req.message}`,
    }
  }

  @GrpcStreamMethod('EchoService', 'GetEchoStream')
  getEchoStream(
    data$: Observable<EchoRequest.AsObject>,
  ): Observable<EchoResponse.AsObject> {
    const echo$ = new Subject<EchoResponse.AsObject>()
    const onNext = (req: EchoRequest.AsObject) => {
      const res = this.echos.find(({ id }) => id === req.id)
      echo$.next(res)
    }
    const onComplete = () => echo$.complete()
    data$.subscribe({
      next: onNext,
      complete: onComplete,
    })
    return echo$.asObservable()
  }
}
