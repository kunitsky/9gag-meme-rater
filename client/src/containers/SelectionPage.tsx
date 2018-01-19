import * as React from 'react'
import SelectionBox from '../components/SelectionBox'
import { Meme, getSelectionMemes, voteMeme } from '../api/memes'

interface State {
  memes: Meme[] | null
  selectingMemeIndex: number | null
}

class SelectionPage extends React.Component<{}, State> {
  state = {
    memes: null,
    selectingMemeIndex: null
  }

  setMemes = () => {
    this.setState({ memes: null })
    getSelectionMemes().then(memes => {
      this.setState({ memes })
    })
  }

  componentWillMount () {
    this.setMemes()
  }

  onVote = async (meme: Meme, memeIndex: number) => {
    this.setState({ selectingMemeIndex: memeIndex })
    const success = await voteMeme(meme)
    if (!success) console.error('server error')
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
