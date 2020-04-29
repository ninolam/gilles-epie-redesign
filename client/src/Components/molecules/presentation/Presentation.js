import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPresentation = styled.pre`
  background-color: #f8f8f8;
  font-family: Karla;
  padding-left: 150px;
  padding-top: 287px;
  padding-bottom: 85px;
  color: #181b24;
`;


const Presentation = ({children, testid}) => {
    return(
        <StyledPresentation data-testid={testid}>{children}</StyledPresentation>
    )
}

/* Will show the right 'tag' within documentation */
Presentation.displayName = 'Presentation';
Presentation.defaultProps = {
    testid: 'presentation'
};

Presentation.propTypes = {
   /** Children as ONE element */
   children: PropTypes.element.isRequired,
   /** Optionnal testid */
   testid: PropTypes.string,  
  };

export default Presentation;