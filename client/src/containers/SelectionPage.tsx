import * as React from 'react'
import SelectionBox from '../components/SelectionBox'
import { Meme, selectionMemes, voteMeme } from '../api/memes'

interface State {
  memes: Meme[] | null
  selectingMemeIndex: number | null
}

class SelectionPage extends React.Component<{}, State> {
  constructor (props: {}) {
    super(props)
    this.state = {
      memes: null,
      selectingMemeIndex: null
    }
  }

  setMemes = () => {
    this.setState({ memes: null })
    selectionMemes().then(memes => {
      this.setState({ memes })
    })
  }

  componentWillMount () {
    this.setMemes()
  }

  onVote = async (winner: Meme, memeIndex: number) => {
    const memes = this.state.memes
    this.setState({ selectingMemeIndex: memeIndex })
    if (memes) {
      await voteMeme(winner, memes[0].gagId === winner.gagId ? memes[1] : memes[0])
    }
    this.setState({ selectingMemeIndex: null })
    this.setMemes()
  }

  render () {
    const { memes, selectingMemeIndex } = this.state
    const { onVote } = this
    return (
     <div>
       <SelectionBox onVote={onVote} memes={memes} selectingMemeIndex={selectingMemeIndex}/>
     </div>
    )
  }
}

export default SelectionPage
