import React from 'react'
import { AddClusterInfoIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Actions/AddClusterInfoIcon',
  component: AddClusterInfoIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <AddClusterInfoIcon {...props} />
}

Default.args = {
  size: 50,
}
