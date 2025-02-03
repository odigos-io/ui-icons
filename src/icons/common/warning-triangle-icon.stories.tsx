import React, { useEffect } from 'react'
import { type StoryFn, type StoryObj } from '@storybook/react'
import { Theme } from '@odigos/ui-theme'
import { type SVG } from '../../@types'
import { WarningTriangleIcon } from '.'

interface Props extends SVG {
  darkMode: boolean
}

export default {
  title: 'Common/Warning Triangle',
  component: WarningTriangleIcon,
}

// Create a master template for mapping props to render
// @ts-ignore
const Template: StoryFn<Props> = ({ darkMode, ...props }) => {
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#000' : '#fff'
  }, [darkMode])

  return (
    <Theme.Provider darkMode={darkMode}>
      <WarningTriangleIcon {...props} />
    </Theme.Provider>
  )
}

// Reuse that template for creating different stories
export const Default: StoryObj<Props> = Template.bind({})

Default.args = {
  // @ts-ignore
  darkMode: true,
  size: 50,
}
