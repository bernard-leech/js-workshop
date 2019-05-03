import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import App from './js/components/presentational/App'
// import './index.css'
import store from './js/redux/store'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
