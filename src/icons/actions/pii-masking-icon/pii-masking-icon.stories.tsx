import React from 'react'
import { PiiMaskingIcon } from '.'
import { type SVG } from '../../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Actions/PiiMaskingIcon',
  component: PiiMaskingIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <PiiMaskingIcon {...props} />
}

Default.args = {
  size: 50,
}
