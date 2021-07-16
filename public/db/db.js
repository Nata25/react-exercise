module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  const users = _.times(20, function (n) {
     return {
      id: n,
      name: faker.name.findName(),
      email:  faker.internet.email(),
      phone: faker.phone.phoneNumber()
    }
  })

  const comments = _.times(20, function (n) {
    return {
      id: n,
      name: faker.name.findName(),
      text: faker.lorem.lines(),
      date: faker.date.past()
    }
  })

  const posts = _.times(20, function (n) {
    return {
      id: n,
      name: faker.name.findName(),
      title: faker.random.word(),
      text: faker.lorem.text(),
      date: faker.date.past()
    }
  })

  return {
    users,
    comments,
    posts
  }
}