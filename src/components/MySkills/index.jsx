import * as Styled from './styles';

import { Brain, TerminalWindow } from 'phosphor-react';

import { Tags } from '../Tags';
import { TagsCaption } from '../TagsCaption';

const softSkills = [
  {
    title: 'Trabalho em Equipe',
    level: 'learned',
  },

  {
    title: 'Criativo',
    level: 'learned',
  },
  {
    title: 'Comunicativo',
    level: 'learned',
  },
  {
    title: 'Curioso',
    level: 'learned',
  },

  {
    title: 'Ágil',
    level: 'learning',
  },
  {
    title: 'Pró ativo',
    level: 'learning',
  },
  {
    title: 'Determinado',
    level: 'learning',
  },
  {
    title: 'Autodidata',
    level: 'will learn',
  },
  {
    title: 'Empreendedor',
    level: 'will learn',
  },
];

const hardSkills = [
  {
    title: 'ReactJS',
    level: 'learned',
  },

  {
    title: 'UI/UX',
    level: 'learning',
  },
  {
    title: 'MongoDB',
    level: 'learned',
  },
  {
    title: 'JavaScript',
    level: 'learned',
  },

  {
    title: 'Agile Scrum',
    level: 'learning',
  },
  {
    title: 'Python',
    level: 'learning',
  },
  {
    title: 'Testes unitários',
    level: 'learning',
  },
  {
    title: 'NodeJS',
    level: 'learned',
  },
  {
    title: 'API REST',
    level: 'learned',
  },
  {
    title: 'MySQL',
    level: 'learned',
  },
  {
    title: 'DevOps',
    level: 'will learn',
  },
  {
    title: 'Docker',
    level: 'will learn',
  },
];

export const MySkills = () => {
  return (
    <Styled.Container>
      <Styled.FilterContainer>
        <TagsCaption />
      </Styled.FilterContainer>

      <Styled.CardsContainer>
        <Styled.CardContainer>
          <Styled.TitleWithIcon>
            <Brain size={64} />
            <h1>Comportamentais</h1>
          </Styled.TitleWithIcon>
          <Tags skillsData={softSkills} />
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.TitleWithIcon>
            <TerminalWindow size={64} />
            <h1>Técnicas</h1>
          </Styled.TitleWithIcon>
          <Tags skillsData={hardSkills} />
        </Styled.CardContainer>
      </Styled.CardsContainer>
    </Styled.Container>
  );
};
