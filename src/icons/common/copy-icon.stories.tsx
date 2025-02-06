import React from 'react'
import { CopyIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/CopyIcon',
  component: CopyIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CopyIcon {...props} />
}

Default.args = {
  size: 50,
}
