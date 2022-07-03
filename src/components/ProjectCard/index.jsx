import { Article, GithubLogo, Link } from 'phosphor-react';
import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

const AboutProject = ({ description }) => {
  return (
    <div>
      <h1 style={{ fontSize: '14px' }}>{description}</h1>
    </div>
  );
};

AboutProject.propTypes = {
  description: P.string.isRequired,
};

const TopicsProject = ({ topics }) => {
  return (
    <div>
      {topics ? (
        topics.map(({ node }) => <p key={node.id}>{node.topic.name}</p>)
      ) : (
        <h1>No topics</h1>
      )}
    </div>
  );
};

TopicsProject.propTypes = {
  topics: P.array.isRequired,
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

export const ProjectCard = ({ name, url, githubUrl, topics, description }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const handleSelectedItem = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>{name}</h1>
        <Link size={32} color="#555753" />
        <Article size={32} color="#555753" />
      </Styled.Header>
      <Styled.Navigator>
        <Styled.AboutIcon
          size={32}
          selected={selectedItem === 'about' ? true : false}
          onClick={() => handleSelectedItem('about')}
        />
        <Styled.LanguagesIcon
          size={32}
          selected={selectedItem === 'languages' ? true : false}
          onClick={() => handleSelectedItem('languages')}
        />
        <Styled.TopicsIcon
          size={32}
          selected={selectedItem === 'topics' ? true : false}
          onClick={() => handleSelectedItem('topics')}
        />
      </Styled.Navigator>
      <main>
        <Styled.Content>
          {selectedItem === 'about' && (
            <AboutProject description={description} />
          )}
          {selectedItem === 'topics' && <TopicsProject topics={topics} />}
          {selectedItem === 'languages' && <LanguagesProject />}
        </Styled.Content>
      </main>
      <footer>
        <GithubLogo size={32} color="#555753" />
      </footer>
    </Styled.Container>
  );
};

ProjectCard.propTypes = {
  name: P.string.isRequired,
  url: P.string.isRequired,
  githubUrl: P.string.isRequired,
  topics: P.array.isRequired,
  description: P.string.isRequired,
};
