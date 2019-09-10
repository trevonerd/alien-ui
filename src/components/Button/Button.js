import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = styled.button`
    background-color: lightgrey;
    border-radius: 5px;
    border: 1px solid #333;
    padding: 10px 30px;
`;

const Button = props => {
    return <ButtonPrimary type="button">{props.children}</ButtonPrimary>;
};

export default Button;
