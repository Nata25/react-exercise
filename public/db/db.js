module.exports = function () {
  const faker = require('faker')
  const _ = require('lodash')
  const users = []
  _.times(20, function (n) {
    users.push({
      id: n,
      name: faker.name.findName(),
      email:  faker.internet.email(),
      phone: faker.phone.phoneNumber()
    })
  })

  return {
    users,
    comments: _.times(20, function (n) {
      return {
        id: n,
        text: faker.lorem.lines()
      }
    }),
    posts: _.times(20, function (n) {
      return {
        id: n,
        text: faker.lorem.text(),
        date: faker.date.past()
      }
    })
  }
}