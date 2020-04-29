import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialMediaTitle from '../atoms/SocialMediaTitle';

const StyledNavigationGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavigationGroup = ({}) => {
  return(
    <StyledNavigationGroup>
      <SocialMediaTitle>Facebook</SocialMediaTitle>
      <SocialMediaTitle>Twitter</SocialMediaTitle>
      <SocialMediaTitle>Youtube</SocialMediaTitle>
      <SocialMediaTitle>Instagram</SocialMediaTitle>
    </StyledNavigationGroup>
  )
}

/* Will show the right 'tag' within documentation */
SocialMediaTitle.displayName = 'SocialMediaTitle';
SocialMediaTitle.defaultProps = {
  testid: 'NavigationGroup'
};

SocialMediaTitle.propTypes = {
 /** Optionnal testid */
 testid: PropTypes.string
};

export default NavigationGroup;