import * as React from 'react'
import { Meme } from '../api/memes'
import { Segment } from 'semantic-ui-react'
import MemeContent from './MemeContent'
import GagLink from './GagLink'

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
        {meme.rating} {'points'}
      </h1>
      <Segment>
        <div className={'titleContainer'}>
          <h3>{meme.title}</h3>
          <GagLink gagId={meme.gagId}/>
        </div>
        <MemeContent meme={meme}/>
      </Segment>
    </div>
  )
}

export default RatingMeme
