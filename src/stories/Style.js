import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  BasicStyles,
  ScopedComponentStyles,
  ExtendingStyles,
  MovingStylesToThemes,
  OtherStylingOptions
} from '../Style';

storiesOf('Styles', module)
  .add('Basic Component Styles', () => <BasicStyles />)
  .add('Scoped Component Styles', () => <ScopedComponentStyles />)
  .add('Extending Component Styles', () => (
    <ExtendingStyles />
  ))
  .add('Moving Styles To Themes', () => <MovingStylesToThemes />)
  .add('Other Styling Options', () => <OtherStylingOptions />);
