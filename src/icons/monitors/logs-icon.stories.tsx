import React from 'react'
import { LogsIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Monitors/LogsIcon',
  component: LogsIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <LogsIcon {...props} />
}

Default.args = {
  size: 50,
}
