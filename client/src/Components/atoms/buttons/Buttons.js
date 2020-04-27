import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

const types = {
    blackButton: {
        backgroundColor: '#181b24',
        color: "#ffffff"
    },
    redButton: {
        backgroundColor: '#ff6f7b',
        color: '#181b24'
    },
   
}

const StyledButton = styled.button`
    font-family: Karla;
    font-weight: bold;
    font-size: 14px;
    background-color:  ${props => types[props.type].backgroundColor};
    color: ${props => types[props.type].color};
    width: 126px;
    height: 48px;
    border: none;
    padding: 16px 19px;
    cursor: pointer;
    :disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const Button = ({type, children, onClick, testid, disabled}) => {
    return(
        <StyledButton type={type} data-testid={testid} onClick={onClick} disabled={disabled}>{children}</StyledButton>
    )
}

/* Will show the right 'tag' within documentation */
Button.displayName = 'Button';
Button.defaultProps = {
    type: 'redButton',
    testid: 'button',
    disabled: false,
};

Button.propTypes = {
  /** Optionnal sizes */
 type: PropTypes.oneOf(['blackButton', 'redButton']),
 /** Children as ONE element */
 children: PropTypes.element.isRequired,
 /** Callback when clicked */
 onClick: PropTypes.func.isRequired,
 /** Optionnal testid */
 testid: PropTypes.string,
 /** Disabled state */
 disabled: PropTypes.bool,

};

export default Button;