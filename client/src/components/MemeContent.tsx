import * as React from 'react'
import { Meme, MemeType } from '../api/memes'

interface Props {
  meme: Meme
}

const MemeContent = ({ meme }: Props) => {
  switch (meme.type) {
    case MemeType.Photo:
      return <img src={meme.contentUrl} alt={meme.title} />
    case MemeType.Animated:
      return <video controls={true} src={meme.contentUrl} />
    case MemeType.Video:
      return <h1>Youtube not supported yet</h1>
  }
  return <h1>Client error</h1>
}

export default MemeContent
