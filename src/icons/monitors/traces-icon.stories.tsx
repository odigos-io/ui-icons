import React from 'react'
import { TracesIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Monitors/TracesIcon',
  component: TracesIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <TracesIcon {...props} />
}

Default.args = {
  size: 50,
}
