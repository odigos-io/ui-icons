import React from 'react'
import { MetricsIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Monitors/MetricsIcon',
  component: MetricsIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <MetricsIcon {...props} />
}

Default.args = {
  size: 50,
}
