import * as Styled from './styles';
import { Brain, LightbulbFilament, Tag, TerminalWindow } from 'phosphor-react';

export const MySkills = () => {
  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Styled.TitleWithIcon>
          <Brain size={64} />
          <h1>Comportamentais</h1>
        </Styled.TitleWithIcon>
        <Styled.TagsContainer>
          <Tag size={22} />
          <Tag size={22} />
          <Tag size={22} />
          <Tag size={22} />
          <Tag size={22} />
        </Styled.TagsContainer>
      </Styled.CardContainer>
      <Styled.CardContainer>
        <Styled.TitleWithIcon>
          <TerminalWindow size={64} />
          <h1>Técnicas</h1>
        </Styled.TitleWithIcon>
        <Styled.TagsContainer>
          <Tag size={22} />
          <Tag size={22} />
          <Tag size={22} />
          <Tag size={22} />
          <Tag size={22} />
        </Styled.TagsContainer>
      </Styled.CardContainer>
    </Styled.Container>
  );
};
