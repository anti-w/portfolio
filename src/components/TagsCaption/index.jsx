import * as Styled from './styles';
import P from 'prop-types';

import { SkillHash } from '../SkillHash';

export const TagsCaption = ({ filterSkillsByLevel, tags }) => {
  return (
    <Styled.Container>
      {tags.map((tag) => (
        <Styled.Caption
          onClick={() => {
            filterSkillsByLevel(tag.level);
          }}
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

TagsCaption.propTypes = {
  filterSkillsByLevel: P.func.isRequired,
  tags: P.array,
};
