import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const types = {
    normalButton: {
        backgroundColor: '#ffffff',
        borderRadius: "0"
    },
    redButton: {
        backgroundColor: '#ff6f7b',
        borderRadius: "0"
    },
    roundIcon: {
        backgroundColor: '#ff6f7b',
        borderRadius: "50%"
    },
}


const StyledIconButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => types[props.type].backgroundColor};
    border-radius: ${props => types[props.type].borderRadius};
`;

const StyledIcon = styled.img`
    width: 22px;
`;

const IconButton = ({type, src, onClick, testid, disabled}) => {
    return(
        <StyledIconButton type={type} data-testid={testid} onClick={onClick} disabled={disabled}><StyledIcon src={src} /></StyledIconButton>
    )
}

/* Will show the right 'tag' within documentation */
IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
    type: 'normalButton',
    testid: 'iconButton',
    disabled: false,
};

IconButton.propTypes = {
  /** Optionnal types */
 type: PropTypes.oneOf(['normalButton', 'redButton', "roundIcon"]),
 /** Children as ONE element */
 children: PropTypes.element.isRequired,
 /** Callback when clicked */
 onClick: PropTypes.func.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string,
 /** Icon src */
 src: PropTypes.string,
 /** Disabled state */
 disabled: PropTypes.bool,

};

export default IconButton;