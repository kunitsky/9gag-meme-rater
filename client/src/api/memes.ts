export enum MemeType {
  Video = 'Video', Photo = 'Photo', Animated = 'Animated'
}

export interface Meme {
  gagId: string
  contentUrl: string
  title: string
  type: MemeType
  rating: number
}

export const selectionMemes = async (): Promise<Meme[]> => {
  const response = await (await fetch('/api/v1/memes/selection')).json()
  return response.data
}

export const voteMeme = async (meme: Meme): Promise<Boolean> => {
  try {
    const init: RequestInit = {
      body: JSON.stringify(meme),
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    }
    await fetch('/api/v1/memes/vote', init)
    return true
  } catch (error) {
    return false
  }
}

export const memesRating = async (): Promise<Meme[]> => {
  const response = await (await fetch('/api/v1/memes/rating')).json()
  return response.data
}
