import React from 'react'
import { NotebookIcon } from '.'
import { type SVG } from '../../@types'
import { type StoryFn } from '@storybook/react'

export default {
  title: 'Common/NotebookIcon',
  component: NotebookIcon,
}

export const Default: StoryFn<SVG> = (props) => {
  return <NotebookIcon {...props} />
}

Default.args = {
  size: 50,
}
