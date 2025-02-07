import React from 'react'
import { DestinationsIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Overview/DestinationsIcon',
  component: DestinationsIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <DestinationsIcon {...props} />
}

Default.args = {
  size: 50,
}
