import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

const memesPerPage = 10

export async function memesRating (req: Request, res: Response, next: NextFunction) {
  const page = ~~req.query.page || 0
  const pagesCount = await MemeModel.find().count() / memesPerPage

  let cursor = page >= 0 && page < pagesCount - 1 ? page + 1 : null
  if (page <= pagesCount - 1 || page >= 0) {
    const memes = await MemeModel.find().sort([['rating', -1]]).skip(page * memesPerPage).limit(memesPerPage)
    res.json(successRes({ memes, cursor }))
  } else {
    res.json({ cursor })
  }
}
