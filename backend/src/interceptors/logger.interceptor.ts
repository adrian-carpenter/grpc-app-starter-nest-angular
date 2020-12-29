import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const type = context.getType()
    const handler = context.getHandler()
    const data = JSON.stringify(context.switchToRpc().getData())
    const time = new Date()
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `Type: ${type} | Handler: ${
              handler.name
            } | Data: ${data} | ${time} | ${time.toISOString()}`,
          ),
        ),
      )
  }
}
