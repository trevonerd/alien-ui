import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { IconHover, IconButton } from '../';
import IconReadme from '../README.md';
import { Facebook, Spotify, GitHub, Twitter } from '../../../icons/';

storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .addParameters({
        readme: {
            sidebar: IconReadme,
            includePropTables: [IconHover, IconButton]
        }
    })
    .add('Simple', () => (
        <Spotify
            height={number('height', 30)}
            width={number('width', 30)}
            fill={text('fill', '#1ED760')}
        />
    ))
    .add('With hover', () => (
        <IconHover hover={text('hover', 'lightgrey')}>
            <Facebook
                height={number('height', 30)}
                width={number('width', 30)}
                fill={text('fill', '#4172B8')}
            />
        </IconHover>
    ))
    .add('Button (icon hover)', () => (
        <IconButton
            background={text('background', 'whitesmoke')}
            hover={text('hover', 'lightgrey')}
            padding={number('padding', 12)}>
            <Twitter
                height={number('height', 20)}
                width={number('width', 20)}
                fill={text('fill', '#1DA1F2')}
            />
        </IconButton>
    ))
    .add('Button (bg hover)', () => (
        <IconButton
            background={text('background', 'whitesmoke')}
            hoverBackground={text('hoverBackground', 'lightgrey')}
            padding={number('padding', 12)}>
            <GitHub
                height={number('height', 20)}
                width={number('width', 20)}
                fill={text('fill', '#181717')}
            />
        </IconButton>
    ));
