import React from 'react'
import { ArrowIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/ArrowIcon',
  component: ArrowIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ArrowIcon {...props} />
}

Default.args = {
  size: 50,
}
