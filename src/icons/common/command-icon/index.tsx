import React from 'react'
import Theme from '@odigos/ui-theme'
import type { SVG } from '../../../@types'

export const CommandIcon: SVG = ({ size = 16, fill: f, rotate = 0, onClick }) => {
  const theme = Theme.useTheme()
  const fill = f || theme.text.secondary

  return (
    <svg
      width={size}
      height={size * (24 / 25)}
      viewBox='0 0 25 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      style={{ transform: `rotate(${rotate}deg)` }}
      onClick={onClick}
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.83333 14.6667H7.16667C5.69391 14.6667 4.5 15.8606 4.5 17.3333C4.5 18.8061 5.69391 20 7.16667 20C8.63943 20 9.83333 18.8061 9.83333 17.3333V14.6667ZM9.83333 14.6667H15.1667M9.83333 14.6667V9.33333M15.1667 14.6667H17.8333C19.3061 14.6667 20.5 15.8606 20.5 17.3333C20.5 18.8061 19.3061 20 17.8333 20C16.3606 20 15.1667 18.8061 15.1667 17.3333V14.6667ZM15.1667 14.6667V9.33333M15.1667 9.33333V6.66667C15.1667 5.19391 16.3606 4 17.8333 4C19.3061 4 20.5 5.19391 20.5 6.66667C20.5 8.13943 19.3061 9.33333 17.8333 9.33333H15.1667ZM15.1667 9.33333H9.83333M9.83333 9.33333H7.16667C5.69391 9.33333 4.5 8.13943 4.5 6.66667C4.5 5.19391 5.69391 4 7.16667 4C8.63943 4 9.83333 5.19391 9.83333 6.66667V9.33333Z'
      />
    </svg>
  )
}
