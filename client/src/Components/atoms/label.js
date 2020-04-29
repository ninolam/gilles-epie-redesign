import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledLabel = styled.label`
  font-family: Playfair Display;
  font-weight: 500;
  font-style: italic;
  font-size: 20px;
  line-height: 60px;
  color: #1d1f22;
  span {
    color: #ff6f7b;
  }
`;

const Label = ({ children, testid}) => {
  return(
      <StyledLabel data-testid={testid}>{children}</StyledLabel>
  )
}

/* Will show the right 'tag' within documentation */
Label.displayName = 'Label';
Label.defaultProps = {
    testid: 'label'
};

Label.propTypes = {
 /** Children as ONE element */
 children: PropTypes.element.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string
};

export default Label;