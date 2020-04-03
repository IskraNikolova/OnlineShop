const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
    app.use(cookieParser())
    app.use(session({
      secret: '123456',
      resave: false,
      saveUninitialized: false
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use((req, res, next) => {
      if (req.user) {
        res.locals.currentUser = req.user
      }
      next()
    })
}
