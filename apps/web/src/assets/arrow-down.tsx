import type { SVGProps } from 'react'
import { memo } from 'react'

function Icon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className='bi bi-arrow-down-short'
      fill='currentColor'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z'
        fillRule='evenodd'
      />
    </svg>
  )
}

const ArrowDownIcon = memo(Icon)
export default ArrowDownIcon
