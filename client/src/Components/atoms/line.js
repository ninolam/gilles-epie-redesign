import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLine = styled.div`
  height:  1px;
  width: 360px;
  background-color: #ffffff;
  border: 1px solid #181B24;
`;

const Line = ({testid}) => {
  return(
    <StyledLine data-testid={testid}></StyledLine>
  )
}

/* Will show the right 'tag' within documentation */
Line.displayName = 'Line';
Line.defaultProps = {
  testid: 'Line'
};

Line.propTypes = {
  /** Optionnal testid */
  testid: PropTypes.string
};

export default Line;
