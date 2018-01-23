import * as React from 'react'
import { Segment, Loader } from 'semantic-ui-react'
import { Meme } from '../api/memes'
import RatingMeme from './RatingMeme'

interface Props {
  memes: Meme[] | null
}

const MemesRating = (props: Props) => {
  const renderLoader = () => {
    return (
      <Loader active={true}/>
    )
  }

  const renderMemes = (memes: Meme[]) => {
    return memes.map((meme, index) => <RatingMeme position={index + 1} key={index} meme={meme} />)
  }

  const renderNoMemes = () => {
    return <h2>No votes...</h2>
  }

  const { memes } = props

  if (!memes) {
    return renderLoader()
  }

  return (
    <Segment>
      {memes.length === 0 ? renderNoMemes : renderMemes(memes as Meme[])}
    </Segment>
  )
}

export default MemesRating
