export enum MemeType {
  Video = 'Video', Photo = 'Photo', Animated = 'Animated'
}

export interface Meme {
  id: string
  url: string
  title: string
  type: MemeType
}

export const getSelectionMemes = async (): Promise<Meme[]> => {
  const response = await (await fetch('/api/v1/memes/selection')).json()
  return response.data
}

export const voteMeme = async (id: string) => {
  return true
}
