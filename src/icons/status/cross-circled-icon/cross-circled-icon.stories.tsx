import React from 'react'
import { CrossCircledIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/CrossCircledIcon',
  component: CrossCircledIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CrossCircledIcon {...props} />
}

Default.args = {
  size: 50,
}
