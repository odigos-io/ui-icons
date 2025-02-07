import React from 'react'
import { CrossIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/CrossIcon',
  component: CrossIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CrossIcon {...props} />
}

Default.args = {
  size: 50,
}
