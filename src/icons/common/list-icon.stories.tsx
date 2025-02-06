import React from 'react'
import { ListIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/ListIcon',
  component: ListIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ListIcon {...props} />
}

Default.args = {
  size: 50,
}
