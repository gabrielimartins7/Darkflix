import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import dadosIniciais from './components/data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import footer from './components/Footer';

const AppWrapper = styled.div `
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Heróis"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />


    </AppWrapper>
  );
}

export default App;
