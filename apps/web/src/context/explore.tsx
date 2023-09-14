'use client'

import * as Toast from '@radix-ui/react-toast'
import { useParams } from 'next/navigation'
import type { Dispatch, MutableRefObject, PropsWithChildren, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

export interface BooleanState<T> {
  get: boolean
  set: Dispatch<SetStateAction<T>>
}

export interface ExploreContextProps {
  editMode: BooleanState<boolean>
  id?: string
  showToast: () => void
}

// @ts-expect-error Allow for now.
const ExploreContext = createContext<ExploreContextProps>(null)

export function ExploreProvider(props: PropsWithChildren): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const params = useParams()
  const timerRef: MutableRefObject<number> = useRef(0)

  const id: string = (params.id as string) || 'main'

  function showToast(): void {
    setOpen(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])

  const context = useMemo(
    () => ({
      editMode: { get: edit, set: setEdit },
      id,
      showToast,
    }),
    [edit, id]
  )

  return (
    <>
      <ExploreContext.Provider {...props} value={context} />
      <Toast.Root className='ToastRoot' onOpenChange={setOpen} open={open}>
        <Toast.Title className='ToastTitle'>Properties</Toast.Title>
        <Toast.Description>Details updated successfully.</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className='ToastViewport' />
    </>
  )
}

export function useExplore(): ExploreContextProps {
  return useContext<ExploreContextProps>(ExploreContext)
}
