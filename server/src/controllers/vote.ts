import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

export function vote (req: Request, res: Response, next: NextFunction) {
  console.log(req.body)
  const meme = MemeModel.findByIdAndUpdate(
    req.body.id,
    {
      $inc: { 'rating': 1 },
      ...req.body
    },
    { upsert: true }
  )
  res.status(200).json(successRes(meme))
}
