import cors from 'cors'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import PageContext from './context/PageContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PageContext>
    <App />
  </PageContext>
  // {/* </React.StrictMode> */}
)
