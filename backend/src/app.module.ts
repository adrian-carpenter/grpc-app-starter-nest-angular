import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerInterceptor } from './interceptors/logger.interceptor'
import { EchoModule } from './echo/echo.module'
import { RpcModule } from './rpc/rpc.module'
import { HeroModule } from './hero/hero.module'
import { GreetModule } from './greet/greet.module'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { ChatModule } from './chat/chat.module'

@Module({
  imports: [RpcModule, GreetModule, HeroModule, EchoModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerInterceptor).forRoutes('*')
  }
}
