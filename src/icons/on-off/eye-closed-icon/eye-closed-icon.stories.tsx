import React from 'react'
import { EyeClosedIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/EyeClosedIcon',
  component: EyeClosedIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <EyeClosedIcon {...props} />
}

Default.args = {
  size: 50,
}
