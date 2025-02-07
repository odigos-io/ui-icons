import React from 'react'
import { SourcesIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Overview/SourcesIcon',
  component: SourcesIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <SourcesIcon {...props} />
}

Default.args = {
  size: 50,
}
