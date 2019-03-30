import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  StatefulExpansionPanels,
  FormattingPanelHeaders,
  ScrollablePanel,
  LazyLoadingPanel
} from '../ExpansionPanel';

storiesOf('Expansion Panels', module)
  .addDecorator(withThemeProvider)
  .add('Stateful Expansion Panels', () => <StatefulExpansionPanels />)
  .add('Formatting Panel Headers', () => <FormattingPanelHeaders />)
  .add('Scrollable Panel Content', () => <ScrollablePanel />)
  .add('Lazy Loading Panel Content', () => (
    <LazyLoadingPanel />
  ));
