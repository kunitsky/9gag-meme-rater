import * as React from 'react'
import { Meme, MemeType } from '../api/memes'
import { Segment, Header, Button } from 'semantic-ui-react'

interface Props {
  meme: Meme
  loading: boolean
  onVote: (memeId: string) => void
  disabled: boolean
}

const SelectionMeme = ({ meme, loading, onVote, disabled }: Props) => {
  return (
    <Segment textAlign={'center'} className={'SelectionMeme'}>
      <div className={'contentContainer'}>
        {meme.type === MemeType.IMAGE ? <img src={meme.url} alt={meme.title} /> : <video controls={true} src={meme.url} />}
        <Header>{meme.title}</Header>
      </div>
      <Button loading={loading} disabled={disabled} fluid={true} onClick={() => onVote(meme.id)} icon={'check'}/>
    </Segment>
  )
}

export default SelectionMeme
