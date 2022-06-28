import {
  Article,
  Brain,
  Code,
  DiamondsFour,
  GithubLogo,
  Link,
} from 'phosphor-react';
import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

const AboutProject = () => {
  return (
    <div>
      <h1 style={{ fontSize: '14px' }}>
        Um sistema WEB para usuários que gostariam de buscar informações
        nutricionais a respeito dos alimentos em âmbito nacional e registrar
        suas refeições para uma consulta posteriormente, podendo registrar-se e
        acessar essas informações através de um menu.
      </h1>
    </div>
  );
};
const TopicsProject = () => {
  return (
    <div>
      <h1>Tópicos do projeto</h1>
    </div>
  );
};
const LanguagesProject = () => {
  return (
    <div>
      <h1>Linguagens do projeto</h1>
    </div>
  );
};

const NavigatorItem = (selectedItem) => {
  return <div></div>;
};

export const ProjectCard = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const handleSelectedItem = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>can-eat-web</h1>
        <Link size={32} color="#555753" />
        <Article size={32} color="#555753" />
      </Styled.Header>
      <Styled.Navigator>
        <Styled.AboutIcon
          size={32}
          isSelected={selectedItem === 'about' ? true : false}
          onClick={() => handleSelectedItem('about')}
        />
        <Styled.LanguagesIcon
          size={32}
          isSelected={selectedItem === 'languages' ? true : false}
          onClick={() => handleSelectedItem('languages')}
        />
        <Styled.TopicsIcon
          size={32}
          isSelected={selectedItem === 'topics' ? true : false}
          onClick={() => handleSelectedItem('topics')}
        />
      </Styled.Navigator>
      <main>
        <Styled.Content>
          {selectedItem === 'about' && <AboutProject />}
          {selectedItem === 'topics' && <TopicsProject />}
          {selectedItem === 'languages' && <LanguagesProject />}
        </Styled.Content>
      </main>
      <footer>
        <GithubLogo size={32} color="#555753" />
      </footer>
    </Styled.Container>
  );
};
