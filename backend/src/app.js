const express = require('express')
const userRouter = require('../routes/user')
const authRouter = require('../routes/auth')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(authRouter)

module.exports = app