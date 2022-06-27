import { useState } from 'react';
import { SkillHash } from '../SkillHash';
import * as Styled from './styles';

export const TagsCaption = () => {
  const [tags, setTags] = useState([
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
  ]);

  const handleSelectedSkill = (title) => {
    const tagsSelected = tags.map((tag) => {
      if (title === tag.title) {
        tag.isSelected = !tag.isSelected;
      }
      return tag;
    });

    setTags(tagsSelected);
  };
  return (
    <Styled.Container>
      {tags.map((tag) => (
        <Styled.Caption
          onClick={() => handleSelectedSkill(tag.title)}
          key={tag.title}
          isSelected={tag.isSelected}
        >
          <SkillHash
            title={tag.title}
            level={tag.level}
            isSelected={tag.isSelected}
          />
        </Styled.Caption>
      ))}
    </Styled.Container>
  );
};
