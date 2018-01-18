import * as rp from 'request-promise'
import { Response, Request } from 'express'
import { successRes, failRes } from '../utils/responses'
import { getRandomNumbers } from '../utils/randomizer'
import { convertType } from '../utils/convertType'

export function getRandomMemes (req: Request, res: Response) {
  rp('https://9gag.com/v1/group-posts/group/default/type/new')
    .then((jsonStr) => {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      let resp = JSON.parse(jsonStr)
      let numb1: number = getRandomNumbers().number1
      let numb2: number = getRandomNumbers().number2
      let object1 = {
        url: resp.data.posts[numb1].images.image700.url,
        id: resp.data.posts[numb1].id,
        type: convertType(resp.data.posts[numb1].type),
        title: resp.data.posts[numb1].title
      }
      let object2 = {
        url: resp.data.posts[numb2].images.image700.url,
        id: resp.data.posts[numb2].id,
        type: convertType(resp.data.posts[numb2].type),
        title: resp.data.posts[numb2].title
      }

      res.status(200).json(successRes({ data: [object1, object2] }))
    })

}
