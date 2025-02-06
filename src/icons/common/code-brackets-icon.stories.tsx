import React from 'react'
import { CodeBracketsIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/CodeBracketsIcon',
  component: CodeBracketsIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CodeBracketsIcon {...props} />
}

Default.args = {
  size: 50,
}
