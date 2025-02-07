import React from 'react'
import { XIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/XIcon',
  component: XIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <XIcon {...props} />
}

Default.args = {
  size: 50,
}
