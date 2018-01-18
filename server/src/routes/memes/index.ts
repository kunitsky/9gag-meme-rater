import * as express from 'express'
const MemeRouter = express.Router()
import getRouter from './get'

MemeRouter.use('/', getRouter)

export default MemeRouter
