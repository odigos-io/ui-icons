import React from 'react'
import Theme from '@odigos/ui-theme'
import type { SVG } from '../../../@types'

export const FolderIcon: SVG = ({ size = 16, fill: f, rotate = 0, onClick }) => {
  const theme = Theme.useTheme()
  const fill = f || theme.text.secondary

  return (
    <svg
      width={size * (18 / 19)}
      height={size}
      viewBox='0 0 18 19'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      style={{ transform: `rotate(${rotate}deg)` }}
      onClick={onClick}
    >
      <path
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M1.5 7.96504C1.5 6.28488 1.5 5.4448 1.82698 4.80307C2.1146 4.23858 2.57354 3.77964 3.13803 3.49202C3.77976 3.16504 4.61984 3.16504 6.3 3.16504H6.53667C6.88887 3.16504 7.06498 3.16504 7.22483 3.21358C7.36634 3.25656 7.49799 3.32702 7.61225 3.42093C7.74131 3.527 7.83899 3.67353 8.03436 3.96658L8.46564 4.6135C8.66101 4.90655 8.75869 5.05308 8.88775 5.15915C9.00201 5.25306 9.13366 5.32352 9.27517 5.36649C9.43502 5.41504 9.61113 5.41504 9.96333 5.41504H11.7C13.3802 5.41504 14.2202 5.41504 14.862 5.74202C15.4265 6.02964 15.8854 6.48858 16.173 7.05307C16.5 7.6948 16.5 8.53488 16.5 10.215V11.865C16.5 13.5452 16.5 14.3853 16.173 15.027C15.8854 15.5915 15.4265 16.0504 14.862 16.3381C14.2202 16.665 13.3802 16.665 11.7 16.665H6.3C4.61984 16.665 3.77976 16.665 3.13803 16.3381C2.57354 16.0504 2.1146 15.5915 1.82698 15.027C1.5 14.3853 1.5 13.5452 1.5 11.865V7.96504Z'
      />
    </svg>
  )
}
