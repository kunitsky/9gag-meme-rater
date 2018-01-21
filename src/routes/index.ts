import * as express from 'express'
import * as memeRouter from './memes/index'
import { client } from '../controllers/client'

const router = express.Router()

router.use('/api/v1/memes', memeRouter)

router.get('*', client)

export = router
