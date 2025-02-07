import React from 'react'
import { FolderIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Common/FolderIcon',
  component: FolderIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <FolderIcon {...props} />
}

Default.args = {
  size: 50,
}
