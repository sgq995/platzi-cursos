import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-ashen.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
