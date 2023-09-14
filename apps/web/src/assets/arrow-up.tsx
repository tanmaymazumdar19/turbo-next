import type { SVGProps } from 'react'
import { memo } from 'react'

function Icon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className='bi bi-arrow-up-short'
      fill='currentColor'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z'
        fillRule='evenodd'
      />
    </svg>
  )
}

const ArrowUpIcon = memo(Icon)
export default ArrowUpIcon
