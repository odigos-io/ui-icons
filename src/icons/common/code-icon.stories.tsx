import React from 'react'
import { CodeIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/CodeIcon',
  component: CodeIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CodeIcon {...props} />
}

Default.args = {
  size: 50,
}
