import { Barcode, Hamburger } from 'phosphor-react';

import TypeAnimation from 'react-type-animation';
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
          Tenho 27 anos, sou de uma pequena cidade do interior de São Paulo
          chamada Quintana. Desde meus 10 anos eu mexo com computadores e busco
          na tecnologia uma maneira de me expressar, mostrar quem eu sou e do
          que sou capaz. E foi assim que me apaixonei e me tornei um
          desenvolvedor.
        </p>
      </Styled.ResumeContainer>

      <Hamburger size={256} />
    </Styled.ContainerFlex>
  );
};
