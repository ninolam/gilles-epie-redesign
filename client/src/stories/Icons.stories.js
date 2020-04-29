import React from 'react';
import { action } from '@storybook/addon-actions';
import IconButton from '../Components/atoms/icons/Icons';
import ArrowIcon from '../assets/img/arrow.svg';
import BurgerIcon from '../assets/img/burger.png';
import CloseIcon from '../assets/img/close.png';
import '../styles/global/reset.scss';

export default {
  title: 'IconButtons'
}

export const Burger = props => <IconButton type='normalButton' src={BurgerIcon} testid="normalButton icon" onClick={props.onClick}></IconButton>;
export const Close = props => <IconButton type='normalButton' src={CloseIcon} testid="normalButton icon" onClick={props.onClick}></IconButton>;
export const Arrows = props => <><IconButton type='normalButton' src={ArrowIcon} testid="normalButton icon" onClick={props.onClick}></IconButton><IconButton type='redButton' src={ArrowIcon} testid="roundIcon icon" onClick={props.onClick}></IconButton><IconButton type='roundIcon' src={ArrowIcon} testid="redButton icon" onClick={props.onClick}></IconButton></>;
