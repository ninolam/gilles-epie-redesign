import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  height:  36px;
  width: 360px;
  color: white;
  border: none;
  background-color: #181B24;
  font-family: Karla;
  font-weight: 400;
  font-style: regular;
  font-size: 15px;
  line-height: 26px;
  outline: none;
  
  ::placeholder {
    font-family: Karla;
    font-weight: 400;
    font-style: regular;
    font-size: 15px;
    line-height: 26px;
    color: white;
  }
`;

const Input = ({placeholder, testid}) => {
  return(
    <StyledInput data-testid={testid} placeholder={placeholder} />
  )
}

/* Will show the right 'tag' within documentation */
Input.displayName = 'Input';
Input.defaultProps = {
  placeholder: 'Type here',
  testid: 'Input'
};

Input.propTypes = {
  /** Optionnal placeholder */
  placeholder: PropTypes.string,
  /** Optionnal testid */
  testid: PropTypes.string
};

export default Input;
