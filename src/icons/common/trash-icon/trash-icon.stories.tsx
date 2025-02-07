import React from 'react'
import { TrashIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/TrashIcon',
  component: TrashIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <TrashIcon {...props} />
}

Default.args = {
  size: 50,
}
