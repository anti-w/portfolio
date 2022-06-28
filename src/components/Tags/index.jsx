import P from 'prop-types';
import { SkillHash } from '../SkillHash';
import * as Styled from './styles';

export const Tags = ({ skillsData }) => {
  return (
    <Styled.Container>
      {skillsData.map((skill) => {
        if (skill.selected) {
          return (
            <SkillHash
              title={skill.title}
              level={skill.level}
              key={skill.title}
            />
          );
        }
      })}
    </Styled.Container>
  );
};

Tags.propTypes = {
  skillsData: P.array,
};
