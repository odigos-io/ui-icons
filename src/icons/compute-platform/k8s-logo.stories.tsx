import React from 'react'
import { K8sLogo } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Compute Platform/K8sLogo',
  component: K8sLogo,
}

export const Default: StoryFn<SVG> = (props) => {
  return <K8sLogo {...props} />
}

Default.args = {
  size: 50,
}
