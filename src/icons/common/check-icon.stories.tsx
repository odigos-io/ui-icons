import React from 'react'
import { CheckIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/CheckIcon',
  component: CheckIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <CheckIcon {...props} />
}

Default.args = {
  size: 50,
}
