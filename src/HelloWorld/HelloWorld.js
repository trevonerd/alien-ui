import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <Title>Hello World!</Title>
            </div>
        );
    }
}

export default HelloWorld;
