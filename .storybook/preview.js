import { addDecorator } from '@storybook/react'
import React from 'react'

import ThemeProvider from '../src/ThemeProvider'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story, { parameters }) => {
  return (
    <ThemeProvider>
        {story()}
    </ThemeProvider>
  )
})

