import * as React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { RouteComponentProps } from 'react-router'

interface State {
  hover: boolean
}

class LandingPage extends React.Component<RouteComponentProps<{}>, State> {
  state = {
    hover: false
  }

  onHover = () => this.setState({ hover: true })

  offHover = () => this.setState({ hover: false })

  render () {
    const { history } = this.props
    const { hover } = this.state
    const redirectToRating = () => history.push('/rating')
    const redirectToSelection = () => history.push('/selection')

    const menuClassName = hover ? 'menu noise' : 'menu'
    console.log(menuClassName)

    return(
      <div className='LandingPage'>
        <h1>9gag meme agregator</h1>
        <h2>Last live 100 fresh memes from 9gag!</h2>
        <div className={menuClassName}>
          <Grid columns={2} verticalAlign={'middle'}>
            <Grid.Column>
              <Button
                onMouseEnter={this.onHover}
                onMouseLeave={this.offHover}
                onClick={redirectToSelection}
                basic={!hover}
                color={'red'}
                size={'huge'}
                content={'Vote!'}
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                onMouseEnter={this.onHover}
                onMouseLeave={this.offHover}
                onClick={redirectToRating}
                basic={!hover}
                color={'green'}
                size={'huge'}
                content={'View!'}
              />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default LandingPage
