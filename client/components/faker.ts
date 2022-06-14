import { faker } from '@faker-js/faker'

export class Faker {

  static getAvatar() {
    return faker.image.avatar()
  }

  static getFirstName() {
    return faker.name.firstName()
  }

  static getLastName() {
    return faker.name.lastName()
  }

  static getText() {
    return faker.image.avatar()
  }
}
