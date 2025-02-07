import React from 'react'
import { WarningTriangleIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Status/WarningTriangleIcon',
  component: WarningTriangleIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <WarningTriangleIcon {...props} />
}

Default.args = {
  size: 50,
}
