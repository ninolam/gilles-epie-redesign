import React from 'react';
import Button from '../Components/atoms/buttons/Buttons';
import ArrowIcon from '../assets/img/arrow.svg';
import WhiteArrowIcon from '../assets/img/white-arrow.svg';
import RedArrow from '../assets/img/red-arrow.png';
import '../Components/atoms/buttons/Buttons.scss';

export default {
  title: 'Buttons'
}

export const Red = props => <Button type='redButton' testid="redButton-button" onClick={props.onClick}><span>Button</span></Button>;
export const RedIcon = props => <Button type='redButton' testid="redIconButton-button" onClick={props.onClick}><span className="arrow">Button<img className="arrow-icon" src={ArrowIcon}/></span></Button>;
export const Black = props => <Button type='blackButton' testid="blackButton-button" onClick={props.onClick}><span>Button</span></Button>;
export const Disabled = props => <Button type='redButton' disabled testid="redButton-button" onClick={props.onClick}><span>Button</span></Button>;
export const RedIconDisabled = props => <Button type='redButton' disabled testid="redIconDisabledButton-button" onClick={props.onClick}><span className="arrow">Button<img className="arrow-icon" src={ArrowIcon}/></span></Button>;
export const Hover = props => <Button type='blackButton' testid="blackIconButton-button" onClick={props.onClick}><span className="arrow white"><img className="arrow-icon white" src={WhiteArrowIcon}/></span></Button>;
export const WhiteIcon = props => <Button type='whiteButton' testid="whiteIconButton-button" onClick={props.onClick}><span className="arrow">Read more<img className="arrow-icon" src={RedArrow}/></span></Button>;
