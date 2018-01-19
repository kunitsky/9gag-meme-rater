import * as React from 'react'
import { Meme } from '../api/memes'
import { Segment } from 'semantic-ui-react'
import MemeContent from './MemeContent'

interface Props {
  meme: Meme
  position: number
}

const RatingMeme = ({ meme, position }: Props) => {
  return (
    <div className='RatingMeme'>
      <h1>
        <span className={'position'}>
          {position}.{' '}
        </span>
        {meme.rating} {meme.rating === 1 ? 'vote' : 'votes'}
      </h1>
      <Segment>
        <h3>{meme.title}</h3>
        <MemeContent meme={meme}/>
      </Segment>
    </div>
  )
}

export default RatingMeme
