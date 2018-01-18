import * as express from 'express'
const getRouter = express.Router()

getRouter.get('/random', (req, res) => {
    res.json(successRes(MemeModel.find())
})

export default getRouter
