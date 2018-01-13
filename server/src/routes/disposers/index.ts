import * as express from 'express'
import {getDisposers} from '../../controllers/disposers'
const router = express.Router()

router.get('/', getDisposers)

export default router