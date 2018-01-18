import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

export function vote (req: Request, res: Response, next: NextFunction) {
  res.json(successRes(MemeModel.findByIdAndUpdate(
    req.query.id,
    { $inc : { 'rating' : 1 } },
    { upsert: true, setDefaultsOnInsert: true }
    )))
}
