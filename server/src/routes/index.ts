import * as express from 'express'
import * as memeRouter from './memes/index'

// routes imports

const router = express.Router()
const apiRouter = express.Router()

// when u wanna add new controller, do this like:
// router.use('/path', controller)

apiRouter.use('/api/v1', router)

router.use('/memes', memeRouter)

apiRouter.get('*', (req, res) => res.send('Hello world!'))

export = apiRouter
