import React from 'react'
import { CheckCircledIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/CheckCircledIcon',
  component: CheckCircledIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CheckCircledIcon {...props} />
}

Default.args = {
  size: 50,
}
