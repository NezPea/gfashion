import { Express } from 'express'
import { router as homeRouter } from './homepage'

export function mountRoutes(app: Express) {
  app.use(homeRouter)
}
