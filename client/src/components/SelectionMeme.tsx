import * as React from 'react'
import { Meme, MemeType } from '../api/memes'
import { Segment, Header, Button } from 'semantic-ui-react'

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
        {meme.type === MemeType.Photo ? <img src={meme.contentUrl} alt={meme.title} /> : <video controls={true} src={meme.contentUrl} />}
        <Header>{meme.title}</Header>
      </div>
      <Button loading={loading} disabled={disabled} fluid={true} onClick={onVote} icon={'check'}/>
    </Segment>
  )
}

export default SelectionMeme
