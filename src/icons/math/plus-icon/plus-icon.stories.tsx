import React from 'react'
import { PlusIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Math/PlusIcon',
  component: PlusIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <PlusIcon {...props} />
}

Default.args = {
  size: 50,
}
