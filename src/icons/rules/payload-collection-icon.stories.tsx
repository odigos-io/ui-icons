import React from 'react'
import { PayloadCollectionIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Instrumentation Rules/PayloadCollectionIcon',
  component: PayloadCollectionIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <PayloadCollectionIcon {...props} />
}

Default.args = {
  size: 50,
}
