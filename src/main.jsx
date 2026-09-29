import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ProdutosProvider } from './contexts/ProdutosContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProdutosProvider>
        <App />
      </ProdutosProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
