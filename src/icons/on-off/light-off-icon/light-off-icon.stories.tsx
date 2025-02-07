import React from 'react'
import { LightOffIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'On-Off/LightOffIcon',
  component: LightOffIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <LightOffIcon {...props} />
}

Default.args = {
  size: 50,
}
