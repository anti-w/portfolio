import TypeAnimation from 'react-type-animation';
import { ImagesSlider } from '../ImagesSlider';
import * as Styled from './styles';

export const AboutMe = () => {
  return (
    <Styled.ContainerFlex>
      <Styled.ResumeContainer>
        <h1 className="title">Olá, me chamo Wendel</h1>
        <TypeAnimation
          wrapper="h2"
          sequence={[
            'Nerd',
            1500,
            'Gamer',
            1500,
            'Dreamer',
            1500,
            'Fullstack developer.',
          ]}
        />
        <p>
          Estou buscando uma oportunidade para mostrar tudo que eu sou capaz e
          ir além. Fazer diferente e criar coisas novas foram meus motivos para
          me tornar um dev. <br />
          <br />
          Família, amor e amigos são minha base.
        </p>
      </Styled.ResumeContainer>
      <ImagesSlider />
    </Styled.ContainerFlex>
  );
};
