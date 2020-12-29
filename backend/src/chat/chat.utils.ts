import { User } from '../generated/users_pb'
import * as faker from 'faker'

export class ChatUtils {
  public static createUser(id: number): User.AsObject {
    const user = new User()
    user.setId(id)
    user.setFirstName(faker.name.firstName())
    user.setLastName(faker.name.lastName())
    user.setDeleted(false)
    user.setChannelIdsList([1])
    user.setActive(true)
    return user.toObject()
  }

  public static createChannelUsers(): User.AsObject[] {
    const users = []
    for (let i = 0; i < 5; i++) {
      const user = this.createUser(
        faker.random.number({
          min: 1000,
          max: 100000,
        }),
      )
      users.push(user)
    }
    return users
  }
}
