import { faker } from '@faker-js/faker'

export class Faker {

  static getUser() {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const image = faker.image.avatar()
    const text = faker.lorem.sentences(3)
    return {
      firstName,
      lastName,
      image,
      text
    }
  }
}
