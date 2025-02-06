import React from 'react'
import { NotificationIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/NotificationIcon',
  component: NotificationIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <NotificationIcon {...props} />
}

Default.args = {
  size: 50,
}
