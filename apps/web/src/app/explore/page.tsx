'use client'

import { Pencil1Icon } from '@radix-ui/react-icons'

import Explore from '../../components/explore'
import { useExplore } from '../../context/explore'

export default function ExplorePage(): JSX.Element {
  const explore = useExplore()

  function onToggleEdit(): void {
    explore.editMode.set((prev: boolean) => !prev)
  }

  return (
    <>
      <div className='w-fit cursor-pointer rounded-lg p-3 hover:bg-green-100' onClick={onToggleEdit}>
        <Pencil1Icon />
      </div>
      <Explore />
    </>
  )
}
