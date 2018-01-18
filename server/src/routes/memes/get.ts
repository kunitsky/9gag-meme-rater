import * as express from 'express'
const getRouter = express.Router()

getRouter.get('/random', (req, res) => {
  res.json({ a: 0 })
})

export default getRouter
