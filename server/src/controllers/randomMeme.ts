import * as request from 'request-promise'
import { Response, Request } from 'express'
import { successRes, failRes } from '../utils/responses'
import { getRandomNumbers } from '../utils/random'

const memesEndpoint = 'https://9gag.com/v1/group-posts/group/default/type/hot'

export const getRandomMemes = (req: Request, res: Response) => {
  request(memesEndpoint).then(json => {
    const responseMemes = JSON.parse(json).data.posts.filter(post => post.type !== 'Article')
    const indecies = getRandomNumbers(responseMemes.length)
    const data = indecies.map(index => {
      let url: string
      let meme = responseMemes[index]
      switch (meme.type) {
        case 'Photo':
          url = meme.images.image700.url
          break
        case 'Animated':
          url = meme.images.image460svwm.url
          break
        case 'Video':
          url = `https://youtu.be/${meme.video.id}`
          break
      }
      return {
        type: meme.type,
        title: meme.title,
        id: meme.id,
        url
      }
    })
    res.status(200).json(successRes(data))
  })
}
