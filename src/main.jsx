import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Home />
    </MyThemeProvider>
  </React.StrictMode>,
);
