import * as express from 'express'
import * as MemeRouter from './memes'

// routes imports

const router = express.Router()
const apiRouter = express.Router()

// when u wanna add new controller, do this like:
// router.use('/path', controller)

apiRouter.use('/api/v1', MemeRouter)

apiRouter.get('*', (req, res) => res.send('Hello world!'))

export default apiRouter
