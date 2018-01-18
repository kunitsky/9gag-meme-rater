import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

export function memeIncRating (req: Request, res: Response, next: NextFunction) {
  res.json(successRes(MemeModel.findById(req.query.id, (err, meme) => {
    if (err) {
      res.json({ success: false, message: err })
    }
    meme.rating++
    meme.save((err, updated) => {
      if (err) {
        res.json({ success: false, message: err })
      }
      res.json(successRes({ updated }))
    })
  })))
}
