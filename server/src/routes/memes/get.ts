import * as express from 'express'
import { memeFromDb } from '../../controllers/memeFromDb'
import { memesRating } from '../../controllers/memesRating'
import { vote } from '../../controllers/vote';
const memeRouter = express.Router()

memeRouter.get('/random', memeFromDb)
memeRouter.get('/rating', memesRating)
memeRouter.get('/vote', vote)

export default memeRouter
