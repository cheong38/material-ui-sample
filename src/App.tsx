import React from 'react'
import ThemeProvider from './ThemeProvider'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const App: React.FC = () => (
  <ThemeProvider>
    <Box>
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
    </Box>
    <Box mt={5}>
      <Button color="primary" variant="contained">Primary Contained</Button>
      <Button color="secondary" variant="contained">Secondary Contained</Button>
      <br/>
      <Button color="primary" variant="outlined">Primary Outlined</Button>
      <Button color="secondary" variant="outlined">Secondary Outlined</Button>
      <br/>
      <Button color="primary" variant="text">Primary Text</Button>
      <Button color="secondary" variant="text">Secondary Text</Button>
    </Box>

  </ThemeProvider>
)

export default App
