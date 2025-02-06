import React from 'react'
import { InfoIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/InfoIcon',
  component: InfoIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <InfoIcon {...props} />
}

Default.args = {
  size: 50,
}
