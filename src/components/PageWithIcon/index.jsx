import P from 'prop-types';

import * as Styled from './styles';
import { BracketsAngle, FinnTheHuman, Rocket } from 'phosphor-react';

export const PageWithIcon = ({ title, handleSelectedPage, icon, selected }) => {
  const isSelected = selected && 'selected';
  return (
    <Styled.TitleAndIcon
      onClick={() => {
        handleSelectedPage(title);
      }}
      className={isSelected}
    >
      {icon === 'about' && <FinnTheHuman size={35} />}
      {icon === 'skills' && <BracketsAngle size={35} />}
      {icon === 'projects' && <Rocket size={35} />}
      <h2>{title}</h2>
      <Styled.Psedo />
    </Styled.TitleAndIcon>
  );
};

PageWithIcon.propTypes = {
  title: P.string.isRequired,
  icon: P.string.isRequired,
  handleSelectedPage: P.func.isRequired,
  selected: P.bool.isRequired,
};
