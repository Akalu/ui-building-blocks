import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  FormInput,
  Confirmation,
  Alerts,
  APIIntegration,
  FullScreenDialogs
} from '../Dialog';

storiesOf('Dialogs', module)
  .addDecorator(withThemeProvider)
  .add('Collecting Input', () => <FormInput />)
  .add('Confirmations', () => <Confirmation />)
  .add('Alerts', () => <Alerts />)
  .add('API Integration', () => <APIIntegration />)
  .add('Full Screen Dialogs', () => <FullScreenDialogs />);
