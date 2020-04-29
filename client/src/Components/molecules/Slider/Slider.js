import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import styled from './node_modules/styled-components';

const StyledPresse = styled.div`
  background-color: #f8f8f8;
  font-family: Karla;
  color: #ffffff;
`;


const Presse = ({children, testid}) => {
    return(
        <StyledPresse data-testid={testid}>{children}</StyledPresse>
    )
}

/* Will show the right 'tag' within documentation */
Presse.displayName = '¨resse';
Presse.defaultProps = {
    testid: 'presse'
};

Presse.propTypes = {
   /** Children as ONE element */
   children: PropTypes.element.isRequired,
   /** Optionnal testid */
   testid: PropTypes.string,  
  };

export default Presse;