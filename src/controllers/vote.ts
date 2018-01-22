import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

const k = 10

function winnerRatingChange (winnerRating: number, loserRating: number): number {
  return 1 / (1 + Math.pow(10, Math.abs(winnerRating - loserRating) / 400))
}

async function memeDbRating (gagId) {
  let dbRecord = await MemeModel.findOne({ gagId })
  return dbRecord ? dbRecord.rating : 0
}

export async function vote (req: Request, res: Response, next: NextFunction) {
  let { winner, loser } = req.body
  let ratings = await Promise.all([
    memeDbRating(winner.gagId),
    memeDbRating(loser.gagId)
  ])
  winner.rating = ratings[0]
  loser.rating = ratings[1]

  winner.rating += Math.floor(k * winnerRatingChange(winner.rating, loser.rating))
  loser.rating -= Math.floor(k * (1 - winnerRatingChange(winner.rating, loser.rating)))

  await Promise.all([
    MemeModel.update({ gagId: winner.gagId }, winner, { upsert: true }),
    MemeModel.update({ gagId: loser.gagId }, loser, { upsert: true })
  ])
  
  res.json(successRes({}))
}
