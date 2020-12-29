import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { GetHeroRequest, Hero } from '../generated/hero_pb'

@Controller('hero')
export class HeroController {
  @GrpcMethod('HeroService', 'GetHero')
  getHeroById(req: GetHeroRequest.AsObject): Hero.AsObject {
    const items: Hero.AsObject[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ]
    return items.find(({ id }) => id === req.id)
  }
}
