import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  APIDrivenAutocomplete,
  Autocomplete,
  SelectingAutocompleteSuggestions,
  StandaloneChipInput
} from '../Autocomplete';

storiesOf('Autocomplete', module)
  .addDecorator(withThemeProvider)
  .add('Autocomplete Component', () => (
    <Autocomplete />
  ))
  .add('Selecting Autocomplete Suggestions', () => (
    <SelectingAutocompleteSuggestions />
  ))
  .add('API Driven Autocomplete', () => <APIDrivenAutocomplete />)
  .add('Standalone Chip Input', () => <StandaloneChipInput />);
