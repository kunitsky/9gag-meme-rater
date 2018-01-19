import * as express from 'express'
import * as memeRouter from './memes/index'

// routes imports
const router = express.Router()

// when u wanna add new controller, do this like:
// router.use('/path', controller)

router.use('/api/v1/memes', memeRouter)
// apiRouter.get('*', (req, res) => res.send('Hello world!'))
export = router
