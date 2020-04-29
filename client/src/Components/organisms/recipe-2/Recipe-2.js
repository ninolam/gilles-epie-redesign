import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRecipe = styled.section`
  background-color: #f8f8f8;
  font-family: Karla;
`;


const Recipe = ({children, testid}) => {
    return (
        <StyledRecipe data-testid={testid}>{children}</StyledRecipe>
    )
}

/* Will show the right 'tag' within documentation */
Recipe.displayName = 'Recipe';
Recipe.defaultProps = {
    testid: 'recipe'
};

Recipe.propTypes = {
   /** Children as ONE element */
   children: PropTypes.element.isRequired,
   /** Optionnal testid */
   testid: PropTypes.string,  
  };

export default Recipe;