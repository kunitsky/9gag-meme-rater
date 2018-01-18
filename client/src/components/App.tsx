import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import SelectionPage from '../containers/SelectionPage'

const App = () => (
  <Layout>
    <Switch>
      <Route component={SelectionPage} path={'/selection'}/>
    </Switch>
  </Layout>
)

export default App
