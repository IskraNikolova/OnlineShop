const encryption = require('../util/encryption')
const User = require('mongoose').model('User')

module.exports = {
  // POST
  register: (req, res) => {
    const reqUser = req.body
    const salt = encryption.generateSalt()
    const hashedPass =
    encryption.generateHashedPassword(salt, reqUser.password)

    User.create({
      email: reqUser.email,
      hashedPass,
      salt,
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      roles: [],
      orders: []
    })
    .then((user) => {
      req.logIn(user, (err, u) => {
        if (err) {
          res.status(400).send(e.message)
          res.end()
        } else {
          res.status(201).send(user)
        }
      })
    })
    .catch((err) => {
      errorHandler(err)
    })
  },
  login: (req, res) => {
    const reqUser = req.body
    User.findOne({ email: reqUser.email })
      .then((user) => {
        if (!user) {
          errorHandler('Invalid email')
          return
        }
        if (!user.authenticate(reqUser.password)) {
          errorHandler('Invalid password')
          return
        }
        req.logIn(user, (err, u) => {
          if (err) {
            errorHandler(err.message)
          } else {
            res.status(200).send(user)
          }
        })
      })
      .catch((err) => {
        errorHandler(err)
      })
  },
  // GET
  all: (req, res) => {
    User.find()
      .then((users) => {
        res.status(200).send(users)
      })
      .catch((err) => {
        res.status(400).send(err)
        res.end()
      })
  },
  getById: (req, res) => {
    const id = req.params.id
    User.find({ _id: id })
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((err) => {
        res.status(400).send(err)
        res.end()
      })
  },
  baseUrl: () => {
    return '/api/users'
  }
}

function errorHandler(e) {
  res.status(400).send(e)
  res.end()
}