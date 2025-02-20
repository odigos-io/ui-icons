import React from 'react'
import Theme from '@odigos/ui-theme'
import type { SVG } from '../../../@types'

export const NotificationIcon: SVG = ({ size = 16, fill: f, rotate = 0, onClick }) => {
  const theme = Theme.useTheme()
  const fill = f || theme.text.secondary

  return (
    <svg
      width={size * (16 / 17)}
      height={size}
      viewBox='0 0 16 17'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      style={{ transform: `rotate(${rotate}deg)` }}
      onClick={onClick}
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6.10569 12.3626C5.27488 12.3229 4.44501 12.2571 3.61736 12.1651C2.94777 12.0907 2.51712 11.4179 2.73017 10.7787C2.83819 10.4547 2.94697 10.1359 2.97558 9.79265L3.21224 6.95266C3.41977 4.46237 5.50153 2.54688 8.00045 2.54688C10.4994 2.54688 12.5811 4.46237 12.7886 6.95266L13.0254 9.79425C13.054 10.1373 13.1627 10.456 13.2703 10.78C13.4824 11.4188 13.052 12.0906 12.383 12.165C11.5555 12.257 10.7258 12.3228 9.89517 12.3625M6.10569 12.3626C7.36812 12.4229 8.63275 12.4229 9.89517 12.3625M6.10569 12.3626L6.10571 12.6522C6.10571 13.6986 6.95401 14.5469 8.00045 14.5469C9.04688 14.5469 9.89519 13.6986 9.89519 12.6522L9.89517 12.3625'
      />
    </svg>
  )
}
