import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

export async function vote (req: Request, res: Response, next: NextFunction) {
  const meme = await MemeModel.findOneAndUpdate(
    { 'url': req.body.url },
    {
      $set: req.body,
      $inc: { 'rating': 1 }
    },
    { upsert: true }
  )
  console.log('meme: ',meme)
  res.status(200).json(successRes({}))
}
