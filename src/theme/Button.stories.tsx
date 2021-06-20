import React from 'react';

import { Meta } from '@storybook/react';

import Button from '@material-ui/core/Button'

export default {
  title: 'Theme/Button',
  component: Button,
} as Meta;

export const Basic = () => (
  <>
    <Button color="primary" variant="contained">Primary Contained</Button>
    <Button color="secondary" variant="contained">Secondary Contained</Button>
    <br/>
    <Button color="primary" variant="outlined">Primary Outlined</Button>
    <Button color="secondary" variant="outlined">Secondary Outlined</Button>
    <br/>
    <Button color="primary" variant="text">Primary Text</Button>
    <Button color="secondary" variant="text">Secondary Text</Button>
  </>
)