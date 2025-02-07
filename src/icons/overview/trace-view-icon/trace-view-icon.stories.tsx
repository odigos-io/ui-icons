import React from 'react'
import { TraceViewIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Overview/TraceViewIcon',
  component: TraceViewIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <TraceViewIcon {...props} />
}

Default.args = {
  size: 50,
}
