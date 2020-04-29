import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../atoms/input';
import Line from '../atoms/line';

const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    height: 46px;
    width: 362px;
    margin-bottom: 36px;
    background-color: #181B24;
`;

const InputGroup = ({placeholder, testid}) => {
  return(
    <StyledInputGroup>
      <Input
        placeholder={placeholder}
        data-testid={testid}
      />
      <Line></Line>
    </StyledInputGroup>
  )
}

/* Will show the right 'tag' within documentation */
InputGroup.displayName = 'InputGroup';
InputGroup.defaultProps = {
  placeholder: 'Type here',
  testid: 'InputGroup'
};

InputGroup.propTypes = {
 /** Optionnal placeholder */
 placeholder: PropTypes.string.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string
};

export default InputGroup;