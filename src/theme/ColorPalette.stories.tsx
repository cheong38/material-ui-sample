import React, { ReactNode } from 'react'

import { Meta } from '@storybook/react'
import Box from '@material-ui/core/Box'

export default {
  title: 'Theme/ColorPalette'
} as Meta

interface BgColorBoxProps {
  color: string
  bgColor?: string
  children: ReactNode
}

const BgColorBox: React.FC<BgColorBoxProps> = ({ bgColor, color, children }) => {
  return (
    <Box
      bgcolor={bgColor}
      color={color}
      height={13}
      mr={1}
      p={2}
      width={180}
    >
      {children}
    </Box>
  )
}

const colorVariants = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '50']

export const Basic = () => (
  <Box>
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Box>
          {colorVariants.map((variant, i) => (
            <BgColorBox
              bgColor={`_blue.${variant}`}
              color="white"
              key={i}
            >
              Blue {variant}
            </BgColorBox>
          ))}
        </Box>
        <Box>
          {colorVariants.map((variant, i) => (
            <BgColorBox
              bgColor={`_gray.${variant}`}
              color="white"
              key={i}
            >
              Gray {variant}
            </BgColorBox>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
)
