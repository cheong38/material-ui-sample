import React from 'react';

import { Meta } from '@storybook/react';

import Typography from '@material-ui/core/Typography'

export default {
  title: 'Theme/Typography',
  component: Typography,
} as Meta;

export const Basic = () => (
  <>
    <Typography variant="h1">Heading1</Typography>
    <Typography variant="h2">Heading2</Typography>
    <Typography variant="h3">Heading3</Typography>
    <Typography variant="h4">Heading4</Typography>
    <Typography variant="h5">Heading5</Typography>
    <Typography variant="h6">Heading6</Typography>
    <Typography variant="subtitle1">Subtitle1</Typography>
    <Typography variant="subtitle2">Subtitle2</Typography>
    <Typography variant="body1">Body1</Typography>
    <Typography variant="body2">Body2</Typography>
    <Typography variant="button">Button</Typography>
    <br/>
    <Typography variant="caption">Caption</Typography>
    <br/>
    <Typography variant="overline">Overline</Typography>
    <br/>
  </>
)