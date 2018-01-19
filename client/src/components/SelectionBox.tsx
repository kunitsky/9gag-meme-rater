import * as React from 'react'
import { Grid, Loader, Dimmer } from 'semantic-ui-react'
import { Meme } from '../api/memes'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment'
import SelectionMeme from './SelectionMeme'

interface Props {
  memes: Meme[] | null
  selectingMemeIndex: number | null
  onVote: (meme: Meme, memeIndex: number) => void
}

const SelectionBox = ({ onVote, memes, selectingMemeIndex }: Props) => {
  const renderMemes = (memes: Meme[]): JSX.Element[] => {
    return memes.map((meme, index) => {
      return (
        <Grid.Column key={index}>
          <SelectionMeme
            disabled={selectingMemeIndex !== null}
            onVote={(memeId: string) => onVote(meme, index)}
            loading={selectingMemeIndex === index}
            meme={meme}
          />
        </Grid.Column>
      )
    })
  }

  if (!memes) {
    return (
      <Segment>
        <Dimmer active={true}>
          <Loader />
        </Dimmer>
      </Segment>
    )
  }

  return (
    <Grid columns={2}>
      {renderMemes(memes)}
    </Grid>
  )
}

export default SelectionBox
