import React from 'react'
import { SVG } from '../../@types'
import { useTheme } from 'styled-components'

export const MinusIcon: SVG = ({ size = 16, fill: f, rotate = 0, onClick }) => {
  const theme = useTheme()
  const fill = f || theme.text.secondary

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      style={{ transform: `rotate(${rotate}deg)` }}
      onClick={onClick}
    >
      <path stroke={fill} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M5 12H19' />
    </svg>
  )
}
