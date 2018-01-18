import * as express from 'express'
const memeRouter = express.Router()

import { memesRating } from '../../controllers/memesRating'
import { vote } from '../../controllers/vote'
import { getRandomMemes } from '../../controllers/randomMeme'

memeRouter.get('/selection', getRandomMemes)

memeRouter.get('/rating', memesRating)

memeRouter.post('/vote', vote)

export = memeRouter
