import React from 'react';
import darkflix from '../../assets/img/darkflix.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img class="darkflix" src={darkflix} alt="Darkflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;