export enum MemeType {
  VIDEO = 'VIDEO', IMAGE = 'IMAGE'
}

export interface Meme {
  id: string
  url: string
  title: string
  type: MemeType
}

export const getSelectionMemes = async (): Promise<Meme[]> => {
  return [
    {
      id: 'dsasdada',
      url: 'http://i.4cdn.org/wsg/1515796027659.webm',
      type: MemeType.VIDEO,
      title: 'title0'
    },
    {
      id: 'qeqwqeweqw',
      url: 'https://img-9gag-fun.9cache.com/photo/adKNnqD_460s.jpg',
      type: MemeType.IMAGE,
      title: 'title1'
    }
  ]
}

export const voteMeme = async (id: string) => {
  return true
}
