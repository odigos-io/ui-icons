import React from 'react'
import { MinusIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/MinusIcon',
  component: MinusIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <MinusIcon {...props} />
}

Default.args = {
  size: 50,
}
