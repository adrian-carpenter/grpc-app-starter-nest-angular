import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { grpcClientOptions } from './grpc_client.options'
import { LoggerInterceptor } from './interceptors/logger.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.connectMicroservice(grpcClientOptions)
  await app.startAllMicroservicesAsync()
  console.log(`Application is running on: ${50051}`)
}
bootstrap()
