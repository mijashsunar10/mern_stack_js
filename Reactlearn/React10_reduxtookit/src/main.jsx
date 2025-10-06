import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { store } from './redux/store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>


     <Provider store={store}>
      <App />
    </Provider>,

    {/* Basically jun matra store xa tyo chai accesible hos purai aaplication lai so we wrap the App */}
    {/* Provider ma app component lai wrap up garnu parxa so app component as well as other coponent on app will access all those things */}
   
  </StrictMode>,
)
