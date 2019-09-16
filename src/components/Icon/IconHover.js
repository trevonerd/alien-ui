import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Icon = styled.div`
    display: inline-block;

    :hover {
        & svg {
            fill: ${props => props.hover};
        }
    }
`;

const IconHover = props => <Icon hover={props.hover}>{props.children}</Icon>;

IconHover.propTypes = {
    hover: PropTypes.string,
    children: PropTypes.node
};

export default IconHover;
