import React from 'react';
import InputGroup from '../Components/molecules/InputGroup';

export default {
  title:"InputsGroup"
}

export const FooterName = () => <InputGroup testid="Name" placeholder="Name"></InputGroup>;
export const FooterMail = () => <InputGroup testid="Mail" placeholder="Mail"></InputGroup>;
export const FooterMessage = () => <InputGroup testid="Message" placeholder="Message"></InputGroup>;