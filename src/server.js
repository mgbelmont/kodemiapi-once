// Este archivo aloja la definición de nuestro servidor

const express = require('express')

const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const usersRouter = require('./routers/users')
const middlewareLog = require('./middlewares/middleware')
const app = express()

app.use(express.json())
app.use(middlewareLog)
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/users', usersRouter)

module.exports = app