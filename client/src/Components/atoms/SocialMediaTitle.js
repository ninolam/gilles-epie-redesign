import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledSocialMediaTitle = styled.label`
  font-family: Karla;
  font-weight: 400;
  font-style: regular;
  font-size: 15px;
  line-height: 28px;
  color: #979EA6;
  margin-right:53px;
`;

const SocialMediaTitle = ({ children, testid}) => {
  return(
      <StyledSocialMediaTitle data-testid={testid}>{children}</StyledSocialMediaTitle>
  )
}

/* Will show the right 'tag' within documentation */
SocialMediaTitle.displayName = 'Title';
SocialMediaTitle.defaultProps = {
    testid: 'title',
    children: 'SocialMedia'
};

SocialMediaTitle.propTypes = {
 /** Children as ONE element */
 children: PropTypes.element.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string
};

export default SocialMediaTitle;