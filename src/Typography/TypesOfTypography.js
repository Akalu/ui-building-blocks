import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';

const MyTypography = ({ variant, ...props }) => (
  <Typography variant={variant || 'inherit'} {...props} />
);

const TypesOfTypography = () => (
  <Fragment>
    <Typography variant="h1">h1 header</Typography>
    <Typography variant="h2">h2 header</Typography>
    <Typography variant="h3">h3 header</Typography>
    <Typography variant="h4">h4 header</Typography>
    <Typography variant="h5">h5 header</Typography>
    <Typography variant="h6">h6 header</Typography>
    <Typography variant="subtitle1">subtitle1 title</Typography>
    <Typography variant="subtitle2">subtitle2 title</Typography>
    <Typography variant="body1">body1</Typography>
    <Typography variant="body2">body2</Typography>
    <Typography variant="subtitle1">subtitle1 </Typography>
    <Typography variant="caption">caption</Typography>
    <Typography variant="button">button</Typography>
    <Typography variant="overline">overline</Typography>
    <Typography variant="title" component="div">
      <Typography variant="inherit">
        inherited title variant
      </Typography>
      <Typography variant="inherit">
        another inherited title variant
      </Typography>
      <Typography variant="caption">
        overridden caption variant
      </Typography>
    </Typography>
    <MyTypography variant="title" component="div">
      <MyTypography>inherited title variant</MyTypography>
      <MyTypography>another inherited title variant</MyTypography>
      <MyTypography variant="caption">
        overridden caption variant
      </MyTypography>
    </MyTypography>
  </Fragment>
);

export default TypesOfTypography;
