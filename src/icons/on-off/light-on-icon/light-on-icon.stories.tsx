import React from 'react'
import { LightOnIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/LightOnIcon',
  component: LightOnIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <LightOnIcon {...props} />
}

Default.args = {
  size: 50,
}
