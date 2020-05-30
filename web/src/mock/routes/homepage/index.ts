import { Router, Request, Response } from 'express'
import { HomeRecommendationsMock } from './_factories/HomeRecommendations'
import { route } from './_spec'

export const router = Router()

router[route.method](route.path, (_req: Request, res: Response) => {
  res.json(HomeRecommendationsMock.build())
})
