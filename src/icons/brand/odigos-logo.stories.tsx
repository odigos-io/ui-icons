import React from 'react'
import { OdigosLogo } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Brand/OdigosLogo',
  component: OdigosLogo,
}

export const Default: StoryFn<SVG> = (props) => {
  return <OdigosLogo {...props} />
}

Default.args = {
  size: 50,
}
