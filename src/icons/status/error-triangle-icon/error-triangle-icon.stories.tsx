import React from 'react'
import { ErrorTriangleIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/ErrorTriangleIcon',
  component: ErrorTriangleIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <ErrorTriangleIcon {...props} />
}

Default.args = {
  size: 50,
}
