import React from 'react';
import Presentation from '../Components/molecules/presentation/Presentation';
import Button from '../Components/atoms/buttons/Buttons';
import '../Components/molecules/presentation/Presentation.scss';
export default {
  title: 'Presentation'
}

export const Intro = (props) => {
return (
    <Presentation>
        <div className="Presentation__container">
            <span className="Presentation__name">Gille Epie</span>
            <h3 className="Presentation__title">Chef étoile restaurant<br/> gastonomique <span className="Presentation__deco">Paris</span></h3>
            <p className="Presentation__text">Gilles Epié, Chef de cuisine étoilé d’un restaurant <br/>gastronomique français situé à Paris</p>
            <Button type='redButton' testid="redButton-button" onClick={props.onClick}><span>Contact</span></Button>
        </div>
    </Presentation> 
    );
};