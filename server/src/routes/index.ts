import * as express from 'express'

// routes imports
import disposers from './disposers'

const router = express.Router()
const apiRouter = express.Router()

router.use('/disposers', disposers)

apiRouter.use('/api/v1', router)

apiRouter.get('*', (req, res) => res.sendFile('/index.html'))

export default apiRouter