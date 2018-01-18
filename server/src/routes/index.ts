import * as express from 'express'

// routes imports

const router = express.Router()
const apiRouter = express.Router()

// when u wanna add new controller, do this like:
// router.use('/path', controller)

apiRouter.use('/api/v1', router)

apiRouter.get('*', (req, res) => res.send('Hello world!'))

// apiRouter.get('*', (req, res) => res.sendFile('/index.html'))

export default apiRouter
