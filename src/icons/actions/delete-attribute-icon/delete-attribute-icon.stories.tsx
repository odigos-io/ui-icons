import React from 'react'
import { DeleteAttributeIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Actions/DeleteAttributeIcon',
  component: DeleteAttributeIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <DeleteAttributeIcon {...props} />
}

Default.args = {
  size: 50,
}
