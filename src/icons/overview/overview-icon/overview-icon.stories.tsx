import React from 'react'
import { OverviewIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Overview/OverviewIcon',
  component: OverviewIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <OverviewIcon {...props} />
}

Default.args = {
  size: 50,
}
