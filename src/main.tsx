/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { worker } from "./mocks/browser.ts";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()

async function main() {

  await worker.start({
    serviceWorker: {
      url: '/me-mong/mockServiceWorker.js',
    },
    onUnhandledRequest: "bypass",
  })

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-left"
          panelPosition="top"
        />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}

main();
