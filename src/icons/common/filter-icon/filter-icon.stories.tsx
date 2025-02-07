import React from 'react'
import { FilterIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/FilterIcon',
  component: FilterIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <FilterIcon {...props} />
}

Default.args = {
  size: 50,
}
