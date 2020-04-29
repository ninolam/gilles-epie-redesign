import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputGroup from './InputGroup';
import Button from '../atoms/buttons/Buttons';

const StyledContactGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 362px;
    margin-bottom: 36px;
    background-color: #181B24;
    button {
      margin-top: 44px;
    }
`;

const ContactGroup = ({placeholder, testid, onClick}) => {
  return(
    <StyledContactGroup>
      <InputGroup
        placeholder={placeholder}
        data-testid={testid}
      ></InputGroup>
      <InputGroup
        placeholder={placeholder}
        data-testid={testid}
      ></InputGroup>
      <InputGroup
        placeholder={placeholder}
        data-testid={testid}
      ></InputGroup>
      <Button
        type='redButton'
        onClick={onClick}
        data-testid={testid}
      >
      </Button>
    </StyledContactGroup>
  )
}

/* Will show the right 'tag' within documentation */
InputGroup.displayName = 'InputGroup';
InputGroup.defaultProps = {
  placeholder: 'Type here',
  testid: 'ContactGroup'
};

InputGroup.propTypes = {
 /** Optionnal placeholder */
 placeholder: PropTypes.string.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string
};

export default ContactGroup;