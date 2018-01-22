import { Request, Response, NextFunction } from 'express'
import MemeModel from '../models/Meme'
import { successRes, failRes } from '../utils/responses'

function winnerRatingChange(winnerRating: number, loserRating: number): number {
  return 1 / (1 + Math.pow(10, (winnerRating - loserRating) / 400))
}

async function memeDbRating (gagId) {
  let dbRecord = await MemeModel.findOne({ gagId })
  return dbRecord ? dbRecord.rating : 0
}

export async function vote (req: Request, res: Response, next: NextFunction) {
  let { winner, loser } = req.body
  Promise.all([
    memeDbRating(winner.gagId),
    memeDbRating(loser.gagId)
  ])
  .then(ratings => {
    winner.rating = ratings[0]
    loser.rating = ratings[1]
  })

  winner.rating += winnerRatingChange(winner.rating, loser.rating)
  loser.rating -= 1 - winnerRatingChange(winner.rating, loser.rating)

  Promise.all([
    MemeModel.update({ gagId: winner.gagId }, winner, { upsert: true }),
    MemeModel.update({ gagId: loser.gagId }, loser, { upsert: true })
  ])
  .then(() => res.json(successRes({})))  
}
