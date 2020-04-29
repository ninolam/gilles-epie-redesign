import React from 'react';
import Recipe from '../Components/organisms/recipe-2/Recipe-2';
import '../Components/organisms/recipe-2/Recipe-2.scss';
import Button from '../Components/atoms/buttons/Buttons';
import ArrowIcon from '../assets/img/arrow.svg';
import RecipeImg from '../assets/recipe-img.png';


export default {
  title: 'Recipe'
}

export const recipe = (props) => {
return (
    <Recipe>
        <div className="Recipe__container">
            <div className="Recipe__content">
                <span className="Recipe__date">14 juin 2016</span>
                <h3 className="Recipe__title">Ravioli de fois gras de canard au jus de daube</h3>
                <p className="Recipe__text">Recette gastronomique de ravioli de foie gras Ingrédients (pour 6 personnes) Daube de bœuf 300g de joue de bœuf coupée en morceaux 1 litre de vin…</p>
                <Button type='redButton' testid="redIconButton-button" onClick={props.onClick}><span className="arrow">Button<img className="arrow-icon" src={ArrowIcon}/></span></Button>
            </div>
            <img className="Recipe__illustration" src={RecipeImg}/> 
        </div>
    </Recipe> 
    );
};