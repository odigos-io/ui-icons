import React from 'react'
import { RulesIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Overview/RulesIcon',
  component: RulesIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <RulesIcon {...props} />
}

Default.args = {
  size: 50,
}
