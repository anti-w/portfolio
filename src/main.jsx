import { ApolloProvider } from '@apollo/client';
import { client } from './services/apollo';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyThemeProvider />
    </ApolloProvider>
  </React.StrictMode>,
);
