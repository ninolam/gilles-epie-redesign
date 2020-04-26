import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Components/atoms/buttons/Buttons';
import Icon from '../assets/img/arrow.svg';

export default {
  title: 'Buttons'
}

export const Red = props => <Button type='redButton' testid="redButton-button" onClick={props.onClick}><span>Button</span></Button>;
export const Black = props => <Button type='blackButton' testid="blackButton-button" onClick={props.onClick}><span>Button</span></Button>;
export const Disabled = props => <Button type='redButton' disabled testid="redButton-button" onClick={props.onClick}><span>Button</span></Button>;

//export const RedIcon = props => <Button type='redButton' icon testid="iconRedButton-button" onClick={props.onClick}><span><img src={Icon}/>Button</span></Button>;
