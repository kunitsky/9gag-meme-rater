import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

export function memeFromDb (req: Request, res: Response, next: NextFunction) {
  MemeModel.count().exec((err, count) => {
    if (err)  
      res.json({ success: false, message: err })
    const random = Math.floor(Math.random() * count)
    MemeModel.findOne().skip(random).exec(
        (err, result) => {
          if (err) 
            res.json({ success: false, message: err })
          res.json(successRes({ result }))
        })
  }
}
