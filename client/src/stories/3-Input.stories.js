import React from 'react';
import Input from '../Components/atoms/input';

export default {
  title:"Inputs"
}

export const FooterName = () => <Input testid="Name" placeholder="Name"></Input>;
export const FooterMail = () => <Input testid="Mail" placeholder="Mail"></Input>;
export const FooterMessage = () => <Input testid="Message" placeholder="Message"></Input>;