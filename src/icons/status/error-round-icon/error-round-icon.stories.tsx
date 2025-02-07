import React from 'react'
import { ErrorRoundIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/ErrorRoundIcon',
  component: ErrorRoundIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ErrorRoundIcon {...props} />
}

Default.args = {
  size: 50,
}
