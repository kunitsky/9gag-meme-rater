import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

export async function vote (req: Request, res: Response, next: NextFunction) {
  console.log(req.body)
  const meme = await MemeModel.findOneAndUpdate(
    { gagId: req.body.gagId },
    {
      $set: req.body,
      $inc: { rating: 1 }
    },
    { upsert: true }
  )
  res.status(200).json(successRes(meme))
}
