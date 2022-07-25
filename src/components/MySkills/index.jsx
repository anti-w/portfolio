import * as Styled from './styles';

import { Tags } from '../Tags';
import { TagsCaption } from '../TagsCaption';
import { useState } from 'react';

const softSkills = [
  {
    title: 'Trabalho em Equipe',
    level: 'learned',
    selected: true,
  },

  {
    title: 'Criativo',
    level: 'learned',
    selected: true,
  },
  {
    title: 'Comunicativo',
    level: 'learned',
    selected: true,
  },
  {
    title: 'Curioso',
    level: 'learned',
    selected: true,
  },

  {
    title: 'Ágil',
    level: 'learning',
    selected: true,
  },
  {
    title: 'Pró ativo',
    level: 'learning',
    selected: true,
  },
  {
    title: 'Determinado',
    level: 'learning',
    selected: true,
  },
  {
    title: 'Autodidata',
    level: 'will learn',
    selected: true,
  },
  {
    title: 'Empreendedor',
    level: 'will learn',
    selected: true,
  },
];

const hardSkills = [
  {
    title: 'ReactJS',
    level: 'learned',
    selected: true,
  },

  {
    title: 'UI/UX',
    level: 'learning',
    selected: true,
  },
  {
    title: 'MongoDB',
    level: 'learned',
    selected: true,
  },
  {
    title: 'JavaScript',
    level: 'learned',
    selected: true,
  },

  {
    title: 'Agile Scrum',
    level: 'learning',
    selected: true,
  },
  {
    title: 'Python',
    level: 'learning',
    selected: true,
  },
  {
    title: 'Testes unitários',
    level: 'learning',
    selected: true,
  },
  {
    title: 'NodeJS',
    level: 'learned',
    selected: true,
  },
  {
    title: 'API REST',
    level: 'learned',
    selected: true,
  },
  {
    title: 'MySQL',
    level: 'learned',
    selected: true,
  },
  {
    title: 'DevOps',
    level: 'will learn',
    selected: true,
  },
  {
    title: 'Docker',
    level: 'will learn',
    selected: true,
  },
];

const tags = [
  {
    title: 'Aprenderei',
    level: 'will learn',
    isSelected: true,
  },
  {
    title: 'Aprendendo',
    level: 'learning',
    isSelected: true,
  },
  {
    title: 'Aprendi',
    level: 'learned',
    isSelected: true,
  },
];

export const MySkills = () => {
  const [skills, setSkills] = useState({
    softSkills: softSkills,
    hardSkills: hardSkills,
    tags: tags,
  });

  const filterSkillsByLevel = (level) => {
    const filteredSoftSkills = skills.softSkills.map((skill) => {
      if (skill.level === level) {
        skill.selected = !skill.selected;
      }
      return skill;
    });
    const filteredHardSkills = skills.hardSkills.map((skill) => {
      if (skill.level === level) {
        skill.selected = !skill.selected;
      }
      return skill;
    });
    const tagsSelected = tags.map((tag) => {
      if (level === tag.level) {
        tag.isSelected = !tag.isSelected;
      }
      return tag;
    });

    setSkills({
      softSkills: filteredSoftSkills,
      hardSkills: filteredHardSkills,
      tags: tagsSelected,
    });
  };

  return (
    <Styled.Container>
      <Styled.CardsContainer>
        <Styled.CardContainer>
          <Styled.TitleWithIcon>
            <Styled.CustomBrain />
            <h1>Comportamentais</h1>
          </Styled.TitleWithIcon>
          <Tags skillsData={skills.softSkills} />
        </Styled.CardContainer>
        <Styled.CardContainer>
          <Styled.TitleWithIcon>
            <Styled.CustomTerminal />
            <h1>Técnicas</h1>
          </Styled.TitleWithIcon>
          <Tags skillsData={skills.hardSkills} />
        </Styled.CardContainer>
      </Styled.CardsContainer>
      <Styled.FilterContainer>
        <TagsCaption filterSkillsByLevel={filterSkillsByLevel} tags={tags} />
      </Styled.FilterContainer>
    </Styled.Container>
  );
};
