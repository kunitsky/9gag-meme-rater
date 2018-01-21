import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

const memesPerPage = 10

export async function memesRating (req: Request, res: Response, next: NextFunction) {
  const prevCursor = ~~req.query.cursor || 0
  const pagesCount = await MemeModel.find().count() / memesPerPage

  let cursor = prevCursor >= 0 && prevCursor < pagesCount - 1 ? prevCursor + 1 : null
  if (prevCursor <= pagesCount - 1 || prevCursor >= 0) {
    const memes = await MemeModel.find().sort([['rating', -1]]).skip(prevCursor * memesPerPage).limit(memesPerPage)
    res.json(successRes({ memes, cursor }))
  } else {
    res.json({ cursor })
  }
}
