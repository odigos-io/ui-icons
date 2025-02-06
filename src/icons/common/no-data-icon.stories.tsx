import React from 'react'
import { NoDataIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/NoDataIcon',
  component: NoDataIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <NoDataIcon {...props} />
}

Default.args = {
  size: 50,
}
