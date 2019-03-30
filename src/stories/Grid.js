import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import {
  Breakpoints,
  FillingSpace,
  AbstractingContainersAndItems,
  FixedColumnLayout,
  ColumnDirection
} from '../Grid';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('Breakpoints', () => (
    <Breakpoints />
  ))
  .add('Filling Space', () => (
    <FillingSpace
      justify={select('Justify', [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around'
      ])}
    />
  ))
  .add('Abstracting Containers and Items', () => (
    <AbstractingContainersAndItems />
  ))
  .add('Fixed Column Layout', () => (
    <FixedColumnLayout
      width={select('Width', { '25%': 3, '50%': 6, '100%': 12 }, 6)}
    />
  ))
  .add('Column Direction', () => <ColumnDirection />);
