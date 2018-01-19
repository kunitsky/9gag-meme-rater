import * as React from 'react'
import { Meme } from '../api/memes'
import { Segment, Header, Button } from 'semantic-ui-react'
import MemeContent from './MemeContent'

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
        <MemeContent meme={meme}/>
        <Header>{meme.title}</Header>
      </div>
      <Button loading={loading} disabled={disabled} fluid={true} onClick={onVote} icon={'check'}/>
    </Segment>
  )
}

export default SelectionMeme
