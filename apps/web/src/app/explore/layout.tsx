'use client'

import * as Toast from '@radix-ui/react-toast'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { PropsWithChildren } from 'react'

import { ExploreProvider } from '../../context/explore'

export default function ExploreLayout(props: PropsWithChildren): JSX.Element {
  return (
    <Toast.Provider swipeDirection='right'>
      <Theme accentColor='violet' appearance='light'>
        <ExploreProvider>{props.children}</ExploreProvider>
      </Theme>
    </Toast.Provider>
  )
}
