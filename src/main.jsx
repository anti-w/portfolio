import { ApolloProvider } from '@apollo/client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { client } from './services/apollo';
import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyThemeProvider>
        <Home />
      </MyThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
