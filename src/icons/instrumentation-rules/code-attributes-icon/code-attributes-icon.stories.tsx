import React from 'react'
import { CodeAttributesIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Instrumentation Rules/CodeAttributesIcon',
  component: CodeAttributesIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CodeAttributesIcon {...props} />
}

Default.args = {
  size: 50,
}
