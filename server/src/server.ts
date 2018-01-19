import * as express from 'express'
import * as routes from './routes/index'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'

const app = express()

app.use(express.static(path.resolve(__dirname,'..', '..', 'client', 'build')))

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(routes)

export default app
