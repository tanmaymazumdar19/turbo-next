import type { SVGProps } from 'react'
import { memo } from 'react'

function Icon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className='bi bi-three-dots-vertical'
      fill='currentColor'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
    </svg>
  )
}

const ThreeDotsVerticalIcon = memo(Icon)
export default ThreeDotsVerticalIcon
