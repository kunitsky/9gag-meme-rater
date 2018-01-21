import * as request from 'request-promise'

const memesEndpoint = 'https://9gag.com/v1/group-posts/group/default/type/hot'

export async function memes (count: number): Promise<{}> {
  let responseMemes = null
  let cursor = null
  for (let i = 0; i < count; i++) {
    const json = await request(responseMemes ? memesEndpoint + '?' + cursor : memesEndpoint)
    let parsed = JSON.parse(json).data
    let response = parsed.posts.filter(post => post.type !== 'Article')
    if (!responseMemes) {
      responseMemes = response
    } else {
      responseMemes = [...responseMemes, ...response]
    }
    cursor = parsed.nextCursor
  }
  return responseMemes
}
