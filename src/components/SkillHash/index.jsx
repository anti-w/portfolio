import { Hash } from 'phosphor-react';
import P from 'prop-types';
import * as Styled from './styles';

export const SkillHash = ({ level = 'learned', title, isSelected = true }) => {
  const handleIsSelected = isSelected && 'selectedButton';

  return (
    <Styled.Container className={handleIsSelected}>
      {!isSelected && <Hash size={28} color="#555753" />}
      {isSelected && level === 'learning' && <Hash size={28} color="#dac621" />}
      {isSelected && level === 'will learn' && (
        <Hash size={28} color="#b32424" />
      )}
      {isSelected && level === 'learned' && <Hash size={28} color="#48e34f" />}
      <h2>{title}</h2>
    </Styled.Container>
  );
};

SkillHash.propTypes = {
  level: P.string,
  title: P.string.isRequired,
  isSelected: P.bool,
};
