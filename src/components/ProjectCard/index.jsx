import { Article, GithubLogo, Link } from 'phosphor-react';
import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

const AboutProject = ({ description }) => {
  return (
    <div>
      <h2 style={{ fontSize: '14px' }}>{description}</h2>
    </div>
  );
};

AboutProject.propTypes = {
  description: P.string.isRequired,
};

const TopicsProject = ({ topics }) => {
  return topics.map(({ node }) => <p key={node.id}>{node.topic.name}</p>);
};

TopicsProject.propTypes = {
  topics: P.array.isRequired,
};

const LanguagesProject = ({ languages }) => {
  return languages.map((lang) => (
    <p style={{ background: lang.color }} key={lang.id}>
      {lang.name}
    </p>
  ));
};

LanguagesProject.propTypes = {
  languages: P.array.isRequired,
};

export const ProjectCard = ({
  name,
  url,
  githubUrl,
  topics,
  description,
  languages,
}) => {
  const [selectedItem, setSelectedItem] = useState('about');
  const handleSelectedItem = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.ProjectTitle>{name}</Styled.ProjectTitle>
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
          {selectedItem === 'languages' && (
            <LanguagesProject languages={languages} />
          )}
        </Styled.Content>
      </main>
      <footer>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <GithubLogo size={32} />
        </a>
        {url && <Styled.ViewDemo>View demo</Styled.ViewDemo>}
      </footer>
    </Styled.Container>
  );
};

ProjectCard.propTypes = {
  name: P.string.isRequired,
  url: P.string.isRequired,
  githubUrl: P.string,
  topics: P.array.isRequired,
  languages: P.array.isRequired,
  description: P.string.isRequired,
};
