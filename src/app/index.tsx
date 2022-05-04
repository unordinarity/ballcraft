import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app'

const appRoot = createRoot(
  document.getElementById('root')!,
)

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
