import * as React from 'react'
import { Meme } from '../api/memes'
import { Segment, Header, Button, Image } from 'semantic-ui-react'
import MemeContent from './MemeContent'
const gagImage = require('../media/9gag.png')

interface Props {
  meme: Meme
  loading: boolean
  onVote: () => void
  disabled: boolean
}

const SelectionMeme = ({ meme, loading, onVote, disabled }: Props) => {
  return (
    <Segment textAlign={'center'} className={'SelectionMeme'}>
      <div className={'contentContainer'}>
        <a target='_blank' href={`https://9gag.com/gag/${meme.gagId}`}>
          <Image size={'mini'} src={gagImage}/>
        </a>
        <MemeContent meme={meme}/>
        <Header>{meme.title}</Header>
      </div>
      <Button loading={loading} disabled={disabled} fluid={true} onClick={onVote} icon={'check'}/>
    </Segment>
  )
}

export default SelectionMeme
