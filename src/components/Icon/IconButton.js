import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Icon = styled.div`
    display: inline-block;
    padding: ${props => props.padding + 'px'};
    border-radius: ${props =>
        parseInt(props.padding) > 0 ? parseInt(props.padding) + 15 + 'px' : 0};
    background-color: ${props => props.background};
    height: ${props => props.height + 'px'};

    :hover {
        background-color: ${props => props.hoverBackground};

        & svg {
            fill: ${props => props.hover};
        }
    }
`;

class IconButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonHeight: 0,
            svgBackgroundColor: props.background
        };
    }

    static propTypes = {
        background: PropTypes.string,
        padding: PropTypes.number
    };

    static defaultProps = {
        background: '#f5f5f5',
        padding: 12
    };

    componentDidMount() {
        React.Children.forEach(this.props.children, element => {
            if (!React.isValidElement(element)) return;

            this.setState({ buttonHeight: element.props.height });
        });
    }

    render() {
        const { children, background, hover, hoverBackground, padding } = this.props;
        const { buttonHeight } = this.state;

        return (
            <Icon
                background={background}
                height={buttonHeight}
                hover={hover}
                hoverBackground={hoverBackground}
                padding={padding}>
                {children}
            </Icon>
        );
    }
}

export default IconButton;
