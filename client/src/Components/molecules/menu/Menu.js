import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.menu`
  background-color: #f8f8f8;
  font-family: Karla;
  font-size: 36px;
  color: #181b24;
  line-height: 48px;
  letter-spacing: -1.6px;
`;


const Menu = ({children, testid}) => {
    return(
        <StyledMenu data-testid={testid}>{children}</StyledMenu>
    )
}

/* Will show the right 'tag' within documentation */
Menu.displayName = 'Menu';
Menu.defaultProps = {
    testid: 'menu'
};

Menu.propTypes = {
   /** Children as ONE element */
   children: PropTypes.element.isRequired,
   /** Optionnal testid */
   testid: PropTypes.string,  
  };

export default Menu;