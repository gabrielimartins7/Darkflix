import React from 'react';
import darkflix from '../../assets/img/darkflix.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style.js';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage class="darkflix" src={darkflix} alt="Darkflix logo"/>
            </a>

            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </MenuWrapper>
    );
}
export default Menu;