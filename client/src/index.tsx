import 'semantic-ui-css/semantic.min.css'
import './stylesheets/index.sass'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './redux/reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = compose(composeWithDevTools(applyMiddleware(thunkMiddleware)))

export const store = createStore(reducers, enhancer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()