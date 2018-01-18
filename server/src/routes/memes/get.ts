import * as express from 'express'
import { memeFromDb } from '../../controllers/memeFromDb'
import { memesRating } from '../../controllers/memesRating'
const getRouter = express.Router()

getRouter.get('/random', memeFromDb)
getRouter.get('/rating', memesRating)

export default getRouter
