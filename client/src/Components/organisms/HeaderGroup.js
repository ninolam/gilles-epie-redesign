import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../atoms/label';
import Icons from '../atoms/icons/Icons';
import BurgerIcon from '../../assets/img/burger.png';

const StyledHeaderGroup = styled.div`
  background: #FFFFFF;
  // height: 100vh;
  // width: 100vw;
  // display: flex;
`;

const HeaderGroup = ({testid, src, onClick, children}) => {
  return(
    <StyledHeaderGroup>
      <Label>{children}</Label>
      <Icons type='normalButton' src={BurgerIcon} testid={testid} onClick={onClick}></Icons>
    </StyledHeaderGroup>
  )
}

/* Will show the right 'tag' within documentation */
HeaderGroup.displayName = 'HeaderGroup';
HeaderGroup.defaultProps = {
  testid: 'HeaderGroup'
};

HeaderGroup.propTypes = {
 /** Callback when clicked */
 onClick: PropTypes.func.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string
};

export default HeaderGroup;