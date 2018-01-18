import * as express from 'express'
const memeRouter = express.Router()
import { getMemes } from '../../controllers/randomMem'

memeRouter.get('/selectionsMemems', getMemes)

export default memeRouter
