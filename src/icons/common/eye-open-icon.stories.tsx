import React from 'react'
import { EyeOpenIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/EyeOpenIcon',
  component: EyeOpenIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <EyeOpenIcon {...props} />
}

Default.args = {
  size: 50,
}
