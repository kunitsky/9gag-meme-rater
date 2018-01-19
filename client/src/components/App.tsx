import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import SelectionPage from '../containers/SelectionPage'
import RatingPage from '../containers/RatingPage'

const App = () => (
  <Layout>
    <Switch>
      <Route component={SelectionPage} path={'/selection'}/>
      <Route component={RatingPage} path={'/rating'}/>
    </Switch>
  </Layout>
)

export default App
