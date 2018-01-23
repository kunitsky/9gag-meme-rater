import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import SelectionPage from '../containers/SelectionPage'
import RatingPage from '../containers/RatingPage'
import LandingPage from '../containers/LandingPage'

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path={'/'}/>
      <Route exact={true} component={SelectionPage} path={'/selection'}/>
      <Route exact={true} component={RatingPage} path={'/rating'}/>
    </Switch>
  </Layout>
)

export default App
