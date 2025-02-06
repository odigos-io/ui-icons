import React from 'react'
import { SearchIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/SearchIcon',
  component: SearchIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <SearchIcon {...props} />
}

Default.args = {
  size: 50,
}
