import * as React from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router'

const Header = (props: RouteComponentProps<any>) => {
  const redirectToSelection = () => props.history.push('/selection')
  const redirectToRating = () => props.history.push('/rating')
  return (
    <Menu>
      <Menu.Menu position='right'>
        <Menu.Item onClick={redirectToSelection} name='selection'>
          Selection
        </Menu.Item>
        <Menu.Item onClick={redirectToRating} name='rating'>
          Rating
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default withRouter(Header)
