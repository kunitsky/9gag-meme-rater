import * as React from 'react'
import MemesRating from '../components/MemesRating'
import * as api from '../api/memes'
import { Meme } from '../api/memes'
import { Loader, Container } from 'semantic-ui-react'
const Waypoint = require('react-waypoint').default

interface State {
  memes: Meme[] | null
  nextCursor: number | null
  fetchingMore: boolean
}

class RatingPage extends React.Component<{}, State> {
  state: State = {
    memes: null,
    nextCursor: null,
    fetchingMore: false
  }

  componentWillMount () {
    api.memesRating().then(({ memes, cursor }) => {
      this.setState({
        memes, nextCursor: cursor
      })
    })
  }

  fetchMore = () => {
    const { fetchingMore, nextCursor, memes } = this.state
    if (!fetchingMore && nextCursor && memes) {
      this.setState({ fetchingMore: true })
      api.memesRating(nextCursor).then(data => {
        this.setState({ memes: [...memes, ...data.memes], fetchingMore: false, nextCursor: data.cursor })
      })
    }
  }

  render () {
    const { memes, fetchingMore } = this.state
    return (
      <Container>
        <h2>Rating calculated using Elo rating system.</h2>
        <MemesRating memes={memes}/>
        {memes && <Waypoint onEnter={this.fetchMore}/>}
        {fetchingMore && <Loader active={true} inline='centered' />}
      </Container>
    )
  }
}

export default RatingPage
