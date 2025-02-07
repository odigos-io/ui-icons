import React from 'react'
import { EditIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/EditIcon',
  component: EditIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <EditIcon {...props} />
}

Default.args = {
  size: 50,
}
