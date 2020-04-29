import React from 'react';
import Presse from '../Components/molecules/presse/Presse';
import Button from '../Components/atoms/buttons/Buttons';
import '../Components/molecules/presse/Presse.scss';
import ArrowIcon from '../assets/img/arrow.svg';

export default {
  title: 'Presse'
}

export const presse = (props) => {
return (
    <Presse>
        <div className="Presse__container">
            <h3 className="Presse__title"><span className="Presse__deco">Presse</span> : les articles écris par des médias </h3>
            <p className="Presse__text">Explorer des article relatant d’experience, de gastronomie et bien plus…</p>
            <Button type='redButton' testid="redIconButton-button" onClick={props.onClick}><span className="arrow">Explorer<img className="arrow-icon" src={ArrowIcon}/></span></Button>
        </div>
    </Presse> 
    );
};