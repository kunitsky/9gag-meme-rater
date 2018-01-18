import * as express from 'express'
const MemeRouter = express.Router()
import memeRouter from './get'

MemeRouter.use('/', memeRouter)

export default MemeRouter
