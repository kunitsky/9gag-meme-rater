import * as React from 'react'
import { Grid, Loader } from 'semantic-ui-react'
import { Meme } from '../api/memes'
import SelectionMeme from './SelectionMeme'

interface Props {
  memes: Meme[] | null
  selectingMemeIndex: number | null
  onVote: (winner: Meme, memeIndex: number) => void
}

const SelectionBox = ({ onVote, memes, selectingMemeIndex }: Props) => {
  const renderMemes = (memes: Meme[]): JSX.Element[] => {
    return memes.map((meme, index) => {
      return (
        <Grid.Column key={index}>
          <SelectionMeme
            disabled={selectingMemeIndex !== null}
            onVote={() => onVote(meme, index)}
            loading={selectingMemeIndex === index}
            meme={meme}
          />
        </Grid.Column>
      )
    })
  }

  if (!memes) {
    return (
      <Loader active={true} />
    )
  }

  return (
    <Grid columns={2}>
      {renderMemes(memes)}
    </Grid>
  )
}

export default SelectionBox
