import React from 'react';
import styled from 'styled-components';

const DefaultIcon = styled.div`
    display: inline-block;
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    padding: ${props => props.padding + 'px'};

    & svg {
        fill: ${props => props.color};
    }

    :hover {
        & svg {
            fill: ${props => props.hover};
        }
    }
`;

class Icon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            svgColor: props.color
        };

        this.setHover = this.setHover.bind(this);
        this.removeHover = this.removeHover.bind(this);
    }

    static defaultProps = {
        color: '#333',
        height: 45,
        padding: 0,
        width: 45
    };

    setColors(svgColor, svgBackgroundColor) {
        this.setState({
            svgColor: svgColor
        });
    }

    setHover() {
        if (!this.props.hover) return;
        this.setColors(this.props.hover);
    }

    removeHover() {
        if (!this.props.hover) return;
        this.setColors(this.props.color);
    }

    render() {
        const { children, color, height, hover, padding, width } = this.props;

        return (
            <DefaultIcon
                onMouseEnter={this.setHover}
                onMouseLeave={this.removeHover}
                color={color}
                hover={hover}
                width={width}
                height={height}
                padding={padding}>
                {children}
            </DefaultIcon>
        );
    }
}

export default Icon;
