import P from 'prop-types';
import * as Styled from './styles.js';
import { useState } from 'react';

import { Content } from '../components/Content';
import { Menu } from '../components/Menu';

export const Home = ({ theme, toggleTheme }) => {
  const [pages, setPages] = useState([
    {
      title: 'Sobre mim',
      icon: 'about',
      selected: true,
    },
    {
      title: 'Habilidades',
      icon: 'skills',
      selected: false,
    },
    {
      title: 'Projetos',
      icon: 'projects',
      selected: false,
    },
  ]);

  const [selectedPage, setSelectedPage] = useState('Sobre mim');

  const handleSelectedPage = (title) => {
    setSelectedPage(title);
    setPages(
      pages.map((page) => {
        if (page.title === title) {
          page.selected = true;
        } else {
          page.selected = false;
        }
        return page;
      }),
    );
  };

  return (
    <Styled.Container>
      <Menu
        pages={pages}
        handleSelectedPage={handleSelectedPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Content selectedPage={selectedPage} />
    </Styled.Container>
  );
};

Home.propTypes = {
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};
