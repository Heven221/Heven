// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App  from './App'
import ShopContextProvider from './context/ShopContext.jsx'
ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <ShopContextProvider>
               <App />
          <iframe src="https://bot.orimon.ai/?tenantId=d00af6b1-a18a-4d6b-a312-78a2bfa46356&fullScreenBot=true" height="100%" width="100%" frameBorder="0" border="none"></iframe>


       </ShopContextProvider>
   
  </BrowserRouter>,
)
