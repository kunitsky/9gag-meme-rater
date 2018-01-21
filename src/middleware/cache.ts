import * as cacheModule from 'memory-cache'
import * as gag from '../api/9gag'
import { Request, Response, NextFunction } from 'express'

const fillMemes = async cache => {
  const pagesCount = 10
  const memes = await gag.memes(pagesCount)
  cache.put('memes', memes)
}

export const fillCache = async cache => {
  const refreshTime = 30000
  await fillMemes(cache)
  setTimeout(() => fillMemes(cache), refreshTime)
}

export const cacheMiddleware = cache => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.locals.cache = cache
    next()
  }
}
