const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Middleware
app.use(bodyParser.json())
app.use(cors())

const env = process.env.NODE_ENV || 'development'
const config = require('./config/config')[env]
require('./config/database')(config)
require('./config/routes')(app)

app.listen(config.port, () => console.log(`Server start on port ${config.port}`))
