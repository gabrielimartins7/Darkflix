import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import dadosIniciais from './components/data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import footer from './components/Footer';

const AppWrapper = styled.div `
  background: var(--grayDark);

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Vamos entender a fisiologia do Groot, se ele realmente fosse uma planta. Seria possível uma planta humanoide pensar, andar e falar?"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          category={dadosIniciais.categorias[5]}
        />

    </AppWrapper>
  );
}

export default App;
