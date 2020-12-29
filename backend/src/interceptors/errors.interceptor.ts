import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
} from '@nestjs/common'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const type = context.getType()
    const handler = context.getHandler()
    const data = JSON.stringify(context.switchToRpc().getData())
    const time = new Date()
    return next.handle().pipe(
      catchError((err) => {
        console.log(
          `${err} | Handler: ${
            handler.name
          } | Data: ${data} | ${time} | ${time.toISOString()}`,
        )
        return throwError(new BadGatewayException())
      }),
    )
  }
}
