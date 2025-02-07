import React from 'react'
import { RenameAttributeIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Actions/RenameAttributeIcon',
  component: RenameAttributeIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <RenameAttributeIcon {...props} />
}

Default.args = {
  size: 50,
}
