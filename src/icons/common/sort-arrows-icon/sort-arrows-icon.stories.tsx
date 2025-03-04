import React from 'react'
import { SortArrowsIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/SortArrowsIcon',
  component: SortArrowsIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <SortArrowsIcon {...props} />
}

Default.args = {
  size: 50,
}
