import * as url from 'url'
import * as rp from 'request-promise'
import * as gagScraper from '9gag-scraper'
import { Response, Request } from 'express'
import { successRes, failRes } from '../utils/responses'

export function getMemes (req: Request, res: Response) {
  new gagScraper('fresh').getGags((errors: any, data: any) => {
    res.status(200).json(successRes({
      data: data.count
    }))
  })
}
