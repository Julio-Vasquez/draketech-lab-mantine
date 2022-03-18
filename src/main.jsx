import React from 'react'
import ReactDOM from 'react-dom'

import App from './pages/App'
import './sass/_main.scss'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
