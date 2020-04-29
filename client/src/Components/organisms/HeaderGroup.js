import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icons from '../atoms/icons/Icons';
import BurgerIcon from '../../assets/img/burger.png';
import { Logo } from '../../stories/Label.stories';

const StyledHeaderGroup = styled.div`
  background: #FFFFFF;
  border: solid 1px #1D1F22;
  height: 96px;
  width: 1140px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  padding: 0px 150px;
`;

const HeaderGroup = ({testid, src, onClick, children}) => {
  return(
    <StyledHeaderGroup>
      <Logo testid={testid}>{children}</Logo>
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