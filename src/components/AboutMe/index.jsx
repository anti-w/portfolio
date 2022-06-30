import TypeAnimation from 'react-type-animation';
import { ImagesSlider } from '../ImagesSlider';
import * as Styled from './styles';

export const AboutMe = () => {
  return (
    <Styled.ContainerFlex>
      <Styled.ResumeContainer>
        <TypeAnimation
          wrapper="h1"
          sequence={[
            'Olá, me chamo Wendel Demétrio.',
            2000,
            'Um desenvolvedor Fullstack.',
          ]}
        />
        <p>
          27 anos, sou de Quintana - SP e desenvolver pra mim é uma forma de
          expressar quem eu sou, ideias, projetos, solucionar problemas (nem
          todos eles), mas persistir, acreditar, pesquisar e tentar até dar
          certo.
        </p>
      </Styled.ResumeContainer>
      <ImagesSlider />
    </Styled.ContainerFlex>
  );
};
