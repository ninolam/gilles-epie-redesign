import React from 'react';
import Menu from '../Components/molecules/menu/Menu';
import '../Components/molecules/menu/Menu.scss';

export default {
  title: 'Menu'
}

export const menu = (props) => {
return (
    <Menu className="Menu">
        <ul className="Menu__container">
           <li className="Menu__item --first">Accueil</li>
           <li className="Menu__item">Juvia</li>
           <li className="Menu__item">Recette</li>
           <li className="Menu__item">Presse</li>
        </ul>
    </Menu> 
    );
};