import React from 'react'
import { ActionsIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Overview/ActionsIcon',
  component: ActionsIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ActionsIcon {...props} />
}

Default.args = {
  size: 50,
}
