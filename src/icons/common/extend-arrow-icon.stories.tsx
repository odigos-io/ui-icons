import React from 'react'
import { ExtendArrowIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/ExtendArrowIcon',
  component: ExtendArrowIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ExtendArrowIcon {...props} />
}

Default.args = {
  size: 50,
}
