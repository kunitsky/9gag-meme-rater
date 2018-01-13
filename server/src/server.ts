import * as express from 'express'
import routes from './routes'
import * as path from 'path'

const app = express()

app.use(express.static(path.resolve(__dirname,'..', '..', 'client', 'build')))

app.use(routes)

export default app
