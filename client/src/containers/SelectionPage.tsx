import * as React from 'react'
import SelectionBox from '../components/SelectionBox'
import { Meme, getSelectionMemes, voteMeme } from '../api/memes'
import { Button, Divider } from 'semantic-ui-react'

interface Props {}

interface State {
  memes: Meme[] | null
  selectingMemeIndex: number | null
}

class SelectionPage extends React.Component<Props, State> {
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

  skip = () => this.setMemes()

  onVote = async (memeId: string, memeIndex: number) => {
    try {
      this.setState({ selectingMemeIndex: memeIndex })
      await voteMeme(memeId)
      this.setState({ selectingMemeIndex: null })
      this.setMemes()
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { memes, selectingMemeIndex } = this.state
    const { onVote } = this
    return (
     <div>
       <Button fluid={true} primitive={true} color={'yellow'} content={'Skip'} onClick={this.skip}/>
       <Divider/>
       <SelectionBox onVote={onVote} memes={memes} selectingMemeIndex={selectingMemeIndex}/>
     </div>
    )
  }
}

export default SelectionPage
