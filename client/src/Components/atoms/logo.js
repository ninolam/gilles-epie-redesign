import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: Playfair Display;
    font-weight: 500;
    font-style: italic;
    font-size: 48px;
    line-height: 60px;
    padding-bottom: 8px;
    span {
      color:#FF6F7B;
    }
`;

const Logo = ({children}) => {
    return(
        <StyledLabel>{children}</StyledLabel>
    )
}

/* Will show the right 'tag' within documentation */
Logo.displayName = 'Logo-label';

Logo.propTypes = {
 children: PropTypes.element.isRequired,
};

export default Logo;