import React from 'react'
import { KeyIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/KeyIcon',
  component: KeyIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <KeyIcon {...props} />
}

Default.args = {
  size: 50,
}
