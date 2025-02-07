import React from 'react'
import { CommandIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/CommandIcon',
  component: CommandIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CommandIcon {...props} />
}

Default.args = {
  size: 50,
}
