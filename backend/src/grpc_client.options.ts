import { ClientOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: ['echo', 'rpc', 'greet', 'hero', 'api', 'users', 'chat'], // Can actually specify packages
    // Can now specify an array of proto files
    // See: https://github.com/nestjs/nest/pull/3418
    protoPath: [
      'echo.proto',
      'rpc.proto',
      'greet.proto',
      'hero.proto',
      'api.proto',
      'users.proto',
      'chat.proto',
    ],
    loader: {
      keepCase: false, //Somehow setting this to 'true' preserves snake_case on the GrpcMethod request object, setting it to 'false' defaults it to normal behavior; camelCase
      longs: Number,
      defaults: false,
      arrays: true,
      objects: true,
      includeDirs: [join(__dirname, '..', 'protos')],
    },
  },
}
