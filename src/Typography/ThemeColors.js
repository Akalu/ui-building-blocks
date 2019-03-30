import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

const ThemeColors = ({ color }) => (
  <Fragment>
    <Typography variant="h1" color={color}>
      h1 Header
    </Typography>
    <Typography variant="h2" color={color}>
      h2 Header
    </Typography>
    <Typography variant="h3" color={color}>
      h3 Header
    </Typography>
    <Typography variant="h4" color={color}>
      h4 Header
    </Typography>
    <Typography variant="h5" color={color}>
      h5 Header
    </Typography>
    <Typography variant="h6" color={color}>
      h6 Header
    </Typography>
    <Typography variant="subtitle1" color={color}>
      subtitle1
    </Typography>
    <Typography variant="subtitle2" color={color}>
      subtitle2
    </Typography>
    <Typography variant="body1" color={color}>
      body1
    </Typography>
    <Typography variant="body2" color={color}>
      body2
    </Typography>
    <Typography variant="caption" color={color}>
      caption
    </Typography>
    <Typography variant="button" color={color}>
      button
    </Typography>
    <Typography variant="overline" color={color}>
      overline
    </Typography>
  </Fragment>
);

export default ThemeColors;
