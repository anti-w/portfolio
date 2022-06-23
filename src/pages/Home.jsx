import { AboutMe } from '../components/AboutMe';
import { Menu } from '../components/Menu';
import * as Styled from './styles.js';

export const Home = () => {
  return (
    <Styled.Container>
      <Menu />
      <AboutMe />
    </Styled.Container>
  );
};
