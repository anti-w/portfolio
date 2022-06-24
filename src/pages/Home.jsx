import { useEffect, useState } from 'react';
import { Content } from '../components/Content';
import { Menu } from '../components/Menu';
import * as Styled from './styles.js';

export const Home = () => {
  const [pages, setPages] = useState([
    {
      title: 'Sobre mim',
      icon: 'about',
      selected: false,
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

  const [selectedPage, setSelectedPage] = useState('about');

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

  console.log(selectedPage);

  return (
    <Styled.Container>
      <Menu pages={pages} handleSelectedPage={handleSelectedPage} />
      <Content selectedPage={selectedPage} />
    </Styled.Container>
  );
};
