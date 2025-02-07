import React from 'react'
import { SunIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'On-Off/SunIcon',
  component: SunIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <SunIcon {...props} />
}

Default.args = {
  size: 50,
}
