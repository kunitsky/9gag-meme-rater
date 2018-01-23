import * as React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router'

const Header = ({ history }: RouteComponentProps<any>) => {
  const redirectToSelection = () => history.push('/selection')
  const redirectToRating = () => history.push('/rating')
  const redirectToLanding = () => history.push('/')
  return (
    <Menu>
      <Container>
        <Menu.Item onClick={redirectToLanding}>
          Agregator
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item onClick={redirectToSelection} name='selection'>
            Selection
          </Menu.Item>
          <Menu.Item onClick={redirectToRating} name='rating'>
            Rating
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default withRouter(Header)
