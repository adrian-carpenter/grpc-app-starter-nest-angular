import { Controller, Logger } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { GetGreetingRequest, Greeting } from '../generated/greet_pb'

@Controller('greet')
export class GreetController {
  private readonly logger = new Logger(GreetController.name)

  @GrpcMethod('GreetService', 'SayHello')
  sayHello(): Greeting.AsObject {
    return {
      id: 1,
      message: 'Hello World',
    }
  }

  @GrpcMethod('GreetService', 'GetGreeting')
  getGreeting(req: GetGreetingRequest.AsObject): Greeting.AsObject {
    const items: Greeting.AsObject[] = [
      { id: 1, message: 'Healthy' },
      { id: 2, message: 'Hello' },
    ]
    return items.find(({ id }) => id === req.id)
  }
}
