/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {worker} from "./mocks/browser.ts";

async function main() {

  await worker.start({
    serviceWorker: {
      url: '/me-mong/mockServiceWorker.js',
    },
    onUnhandledRequest: "bypass",
  })

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  )
}

main();
