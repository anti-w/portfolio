import TypeAnimation from 'react-type-animation';
import { ImagesSlider } from '../ImagesSlider';
import * as Styled from './styles';

export const AboutMe = () => {
  return (
    <Styled.All>
      <h1 className="title">Olá, me chamo Wendel Demétrio.</h1>
      <Styled.ContainerFlex>
        <Styled.ResumeContainer>
          <TypeAnimation
            wrapper="h1"
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
            ir além. Fazer diferente e criar coisas novas foram meus motivos
            para me tornar um dev. <br />
            <br />
            Família, amor e amigos são minha base.
          </p>
        </Styled.ResumeContainer>
        <ImagesSlider />
      </Styled.ContainerFlex>
    </Styled.All>
  );
};
