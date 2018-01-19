import * as React from 'react'
import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { Meme } from '../api/memes'
import RatingMeme from './RatingMeme'

interface Props {
  memes: Meme[] | null
}

const MemesRating = (props: Props) => {
  const renderLoader = () => {
    return (
      <Dimmer inverted={true} active={true}>
        <Loader/>
      </Dimmer>
    )
  }

  const renderMemes = (memes: Meme[]) => {
    return memes.map((meme, index) => <RatingMeme position={index + 1} key={index} meme={meme} />)
  }

  const { memes } = props
  return (
    <Container>
      <Segment>
        {memes ? renderMemes(memes as Meme[]) : renderLoader()}
      </Segment>
    </Container>
  )
}

export default MemesRating
