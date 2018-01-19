import * as request from 'request-promise'
import { Response, Request } from 'express'
import { successRes, failRes } from '../utils/responses'
import { getRandomNumbers } from '../utils/random'
import * as cache from 'memory-cache'
import * as gag from '../api/9gag'

const refreshTime = 300000
const pagesCount = 10

const fillCache = () => {
  gag.mems(pagesCount).then(memes => cache.put('memes', memes))
}

fillCache() // init fill

setTimeout(fillCache, refreshTime)

export const randomMemes = async (req: Request, res: Response) => {
  const responseMemes = cache.get('memes')
  const indecies = getRandomNumbers(responseMemes.length - 1)
  const data = indecies.map(index => {
    let contentUrl: string
    let meme = responseMemes[index]
    switch (meme.type) {
      case 'Photo':
        contentUrl = meme.images.image700.url
        break
      case 'Animated':
        contentUrl = meme.images.image460svwm.url
        break
      case 'Video':
        contentUrl = `https://youtu.be/${meme.video.id}`
        break
    }
    return {
      type: meme.type,
      title: meme.title,
      gagId: meme.id,
      contentUrl
    }
  })
  res.status(200).json(successRes(data))
}
