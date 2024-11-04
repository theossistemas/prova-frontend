const express = require('express')
const userRouter = require('../routes/user')
const authRouter = require('../routes/auth')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use(userRouter)
app.use(authRouter)

module.exports = app