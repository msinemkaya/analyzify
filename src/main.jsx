import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@shopify/polaris/build/esm/styles.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { AppProvider } from '@shopify/polaris'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider i18n={ {} }>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
