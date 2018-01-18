import * as express from 'express'
const memeRouter = express.Router()
import { memeFromDb } from '../../controllers/memeFromDb'
import { memesRating } from '../../controllers/memesRating'
import { vote } from '../../controllers/vote'
import { getMemes } from '../../controllers/randomMem'

memeRouter.get('/selectionsMemems', getMemes)
memeRouter.get('/random', memeFromDb)
memeRouter.get('/rating', memesRating)
memeRouter.post('/vote', vote)

export default memeRouter
