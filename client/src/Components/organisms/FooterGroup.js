import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContactGroup from '../molecules/ContactGroup';
import NavigationGroup from '../molecules/NavigationGroup';
import map from '../../assets/img/map.png'

const StyledFooterGroup = styled.div`
  background: #181B24;
  padding-left: 20px;
  height: 100vh;
  width: 100vw;
  display: flex;
  position relative;

  div {
    width: 50%;
    display flex;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    max-width: 338px;
    max-height: 124px;
    font-family: Playfair Display;
    font-weight: 500;
    align-self: center;
    font-style: italic;
    font-size: 48px;
    line-height: 60px;
    color: #FFFFFF;
    margin-bottom: 36px;
    margin-top: 80px;
    
    span {
      color: #ff6f7b;
    }
  }
`;

const FooterGroup = ({placeholder, testid, onClick}) => {
  return(
    <StyledFooterGroup>
      <div>
        <p><span>Hello,</span> besoin de quelque chose ?</p>
        <ContactGroup
          styled={styled}
          placeholder={placeholder}
          data-testid={testid}
          onClick={onClick}
        ></ContactGroup>
        <NavigationGroup></NavigationGroup>
      </div>
      <div>
        <img src={map} alt="Carte"/>
      </div>
    </StyledFooterGroup>
  )
}

/* Will show the right 'tag' within documentation */
FooterGroup.displayName = 'FooterGroup';
FooterGroup.defaultProps = {
  placeholder: 'Type here',
  testid: 'FooterGroup'
};

FooterGroup.propTypes = {
 /** Callback when clicked */
 onClick: PropTypes.func.isRequired,
 /** Optionnal placeholder */
 placeholder: PropTypes.string.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string
};

export default FooterGroup;