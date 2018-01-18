import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

const memesPerPage = 10

export function memesRating (req: Request, res: Response, next: NextFunction) {
  const page = req.query.page || 0
  res.json(successRes(MemeModel.find().sort('rating').skip(page * memesPerPage).limit(memesPerPage))
}
