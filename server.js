import express from 'express'
import connectDb from './config/db.js'
import userRoutes from './user/userRoutes.js'
import ScoreRoutes from './score/ScoreRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
dotenv.config()
connectDb()

const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('home page 2048game')
})

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(cors())

app.use('/api/users', userRoutes)
app.use('/api/game', ScoreRoutes)

const port = process.env.PORT || 5000
app.listen(port, console.log(`listening to the port ${port}`))
