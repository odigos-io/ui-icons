import React from 'react'
import { MoonIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'On-Off/MoonIcon',
  component: MoonIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <MoonIcon {...props} />
}

Default.args = {
  size: 50,
}
