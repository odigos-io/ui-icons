import React from 'react'
import { SamplerIcon } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Actions/SamplerIcon',
  component: SamplerIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <SamplerIcon {...props} />
}

Default.args = {
  size: 50,
}
