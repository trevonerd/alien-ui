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

class IconLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            svgColor: props.color,
            svgBackgroundColor: props.background
        };

        this.setHover = this.setHover.bind(this);
        this.removeHover = this.removeHover.bind(this);
    }

    static defaultProps = {
        background: 'transparent',
        color: '#333',
        height: 45,
        padding: 0,
        width: 45
    };

    setColors(svgColor, svgBackgroundColor) {
        this.setState({
            svgColor: svgColor,
            svgBackgroundColor: svgBackgroundColor
        });
    }

    setHover() {
        if (!this.props.hover && !this.props.hoverBackground) return;
        this.setColors(
            this.props.hover,
            this.props.hoverBackground ? this.props.hoverBackground : this.props.background
        );
    }

    removeHover() {
        if (!this.props.hover && !this.props.hoverBackground) return;
        this.setColors(this.props.color, this.props.background);
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

export default IconLink;
