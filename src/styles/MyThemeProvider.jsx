import P from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global-styles';

export const MyThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
