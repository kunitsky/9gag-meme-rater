import * as express from 'express'
const MemeRouter = express.Router()
import memeRouter from './meme'

MemeRouter.use('/', memeRouter)

export default MemeRouter
