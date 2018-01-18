import * as express from 'express'
import { memeFromDb } from '../../controllers/memeFromDb'
import { memesRating } from '../../controllers/memesRating'
import { memeIncRating } from '../../controllers/memeIncRate';
const getRouter = express.Router()

getRouter.get('/random', memeFromDb)
getRouter.get('/rating', memesRating)
getRouter.get('/inc_rating', memeIncRating)

export default getRouter
