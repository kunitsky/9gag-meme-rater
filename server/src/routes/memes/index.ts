import * as express from 'express'
const memeRouter = express.Router()

import { memesRating } from '../../controllers/memesRating'
import { vote } from '../../controllers/vote'
import { randomMemes } from '../../controllers/randomMeme'

memeRouter.get('/selection', randomMemes)

memeRouter.get('/rating', memesRating)

memeRouter.post('/vote', vote)

export = memeRouter
