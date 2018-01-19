import * as React from 'react'
import MemesRating from '../components/MemesRating'
import * as api from '../api/memes'
import { Meme } from '../api/memes'

interface State {
  memes: Meme[]
}

class RatingPage extends React.Component<{}, State> {
  componentWillMount () {
    api.memesRating().then(memes => {
      this.setState({ memes })
    })
  }

  render () {
    return (
      <div>
        <MemesRating/>
      </div>
    )
  }
}

export default RatingPage
