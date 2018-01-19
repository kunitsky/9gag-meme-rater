import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

const memesPerPage = 10

export async function memesRating (req: Request, res: Response, next: NextFunction) {
  const page = req.query.page || 0
  res.json(successRes(await MemeModel.find().sort([['rating', -1]]).skip(page * memesPerPage).limit(memesPerPage)))
}
