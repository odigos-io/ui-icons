import React from 'react'
import { OdigosLogoText } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Brand/OdigosLogoText',
  component: OdigosLogoText,
}

export const Default: StoryFn<SVG> = (props) => {
  return <OdigosLogoText {...props} />
}

Default.args = {
  size: 150,
}
