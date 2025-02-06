import React from 'react'
import { TerminalIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/TerminalIcon',
  component: TerminalIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <TerminalIcon {...props} />
}

Default.args = {
  size: 50,
}
