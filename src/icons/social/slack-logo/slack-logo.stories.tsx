import React from 'react'
import { SlackLogo } from '.'
import type { SVG } from '../../../@types'
import type { StoryFn } from '@storybook/react'

export default {
  title: 'Socials/SlackLogo',
  component: SlackLogo,
}

export const Default: StoryFn<SVG> = (props) => {
  return <SlackLogo {...props} />
}

Default.args = {
  size: 50,
}
