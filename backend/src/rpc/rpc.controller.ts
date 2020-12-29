import { Controller, Logger } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { HealthResponse } from '../generated/rpc_pb'

@Controller('rpc')
export class RpcController {
  private readonly logger = new Logger(RpcController.name)

  @GrpcMethod('RpcService', 'GetHealth')
  getHealth(): HealthResponse.AsObject {
    this.logger.log('Parsing Grpc Object')
    return {
      message: 'All Systems Go!',
    }
  }
}
