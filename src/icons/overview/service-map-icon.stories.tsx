import React from 'react'
import { ServiceMapIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Overview/ServiceMapIcon',
  component: ServiceMapIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ServiceMapIcon {...props} />
}

Default.args = {
  size: 50,
}
