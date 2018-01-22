import * as React from 'react'
import { Meme } from '../api/memes'
import { Segment } from 'semantic-ui-react'
import MemeContent from './MemeContent'
const gagImage = require('../media/9gag.png')

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
        <div className={'titleContainer'}>
          <h3>{meme.title}</h3>
          <img src={gagImage} alt={'gag logo'}/>
        </div>
        <MemeContent meme={meme}/>
      </Segment>
    </div>
  )
}

export default RatingMeme
