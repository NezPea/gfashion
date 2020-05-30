import express from 'express'
import { mountRoutes } from './routes'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mountRoutes(app)
