import * as React from 'react'
import MemesRating from '../components/MemesRating'
import * as api from '../api/memes'
import { Meme } from '../api/memes'

interface State {
  memes: Meme[] | null
}

class RatingPage extends React.Component<{}, State> {
  state = {
    memes: null
  }

  componentWillMount () {
    api.memesRating().then(memes => {
      this.setState({ memes })
    })
  }

  render () {
    const { memes } = this.state
    return (
      <div>
        <MemesRating memes={memes}/>
      </div>
    )
  }
}

export default RatingPage
