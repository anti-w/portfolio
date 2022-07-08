import P from 'prop-types';
import * as Styled from './styles';

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Styled.ToggleTheme onClick={toggleTheme}>
      {theme === 'light' ? (
        <Styled.CustomSun size={36} />
      ) : (
        <Styled.CustomMoon size={36} />
      )}
    </Styled.ToggleTheme>
  );
};

Toggle.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};
