import React from 'react'
import { VmLogo } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Compute Platform/VmLogo',
  component: VmLogo,
}

export const Default: StoryFn<SVG> = (props) => {
  return <VmLogo {...props} />
}

Default.args = {
  size: 50,
}
