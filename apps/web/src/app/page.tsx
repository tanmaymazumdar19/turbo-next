'use client'
import Link from 'next/link'

import { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

const pt = {
  all: {
    lg: [
      { i: 'bio', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'map', x: 2, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'twitter', x: 1, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'wrap', x: 0, y: 3, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 3, y: 2, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 3, w: 2, h: 1, isResizable: false },
    ],
    md: [
      { i: 'bio', x: 0, y: 0, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 2, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'twitter', x: 1, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 3, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 2, y: 3, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 3, y: 2, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 4, w: 2, h: 2, isResizable: false },
    ],
    sm: [
      { i: 'bio', x: 0, y: 0, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'recroot', x: 1, y: 3, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 6, w: 2, h: 2, isResizable: false },
      { i: 'twitter', x: 0, y: 3, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 0, y: 4, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 8, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 0, y: 10, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 0, y: 11, w: 2, h: 2, isResizable: false },
    ],
  },
  about: {
    lg: [
      { i: 'bio', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'map', x: 2, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'twitter', x: 3, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'wrap', x: 0, y: 3, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 3, w: 2, h: 1, isResizable: false },
    ],
    md: [
      { i: 'bio', x: 0, y: 0, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 2, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'twitter', x: 3, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 3, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 2, y: 3, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 4, w: 2, h: 2, isResizable: false },
    ],
    sm: [
      { i: 'bio', x: 0, y: 1, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'recroot', x: 1, y: 3, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 6, w: 2, h: 2, isResizable: false },
      { i: 'twitter', x: 0, y: 3, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 0, y: 4, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 8, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 0, y: 10, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 0, y: 11, w: 2, h: 2, isResizable: false },
    ],
  },
  projects: {
    lg: [
      { i: 'bio', x: 0, y: 1, w: 2, h: 1, isResizable: false },
      { i: 'map', x: 2, y: 2, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'twitter', x: 3, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'wrap', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 3, w: 2, h: 1, isResizable: false },
    ],
    md: [
      { i: 'bio', x: 0, y: 1, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 2, y: 2, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'twitter', x: 3, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 3, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 2, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 4, w: 2, h: 2, isResizable: false },
    ],
    sm: [
      { i: 'bio', x: 0, y: 3, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'recroot', x: 1, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 6, w: 2, h: 2, isResizable: false },
      { i: 'twitter', x: 0, y: 3, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 0, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 8, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 0, y: 1, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 0, y: 11, w: 2, h: 2, isResizable: false },
    ],
  },
  media: {
    lg: [
      { i: 'bio', x: 0, y: 3, w: 2, h: 1, isResizable: false },
      { i: 'map', x: 1, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'twitter', x: 3, y: 1, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 1, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'wrap', x: 0, y: 2, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 2, y: 3, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 0, w: 2, h: 1, isResizable: false },
    ],
    md: [
      { i: 'bio', x: 0, y: 3, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 2, y: 2, w: 1, h: 1, isResizable: false },
      { i: 'recroot', x: 3, y: 0, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 0, w: 2, h: 1, isResizable: false },
      { i: 'twitter', x: 3, y: 0, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 2, y: 2, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 1, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 0, y: 5, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 2, y: 5, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 2, y: 0, w: 2, h: 2, isResizable: false },
    ],
    sm: [
      { i: 'bio', x: 0, y: 10, w: 2, h: 2, isResizable: false },
      { i: 'map', x: 0, y: 9, w: 2, h: 1, isResizable: false },
      { i: 'recroot', x: 1, y: 6, w: 1, h: 2, isResizable: false },
      { i: 'spotify', x: 0, y: 0, w: 2, h: 2, isResizable: false },
      { i: 'twitter', x: 0, y: 12, w: 1, h: 1, isResizable: false },
      { i: 'vouch-for', x: 0, y: 6, w: 1, h: 2, isResizable: false },
      { i: 'blog-excerpt', x: 0, y: 2, w: 2, h: 2, isResizable: false },
      { i: 'wrap', x: 0, y: 8, w: 2, h: 1, isResizable: false },
      { i: 'night-mode-toggle', x: 1, y: 12, w: 1, h: 1, isResizable: false },
      { i: 'newsletter', x: 0, y: 4, w: 2, h: 2, isResizable: false },
    ],
  },
}

export default function Page(): JSX.Element {
  const [filter, setFilter] = useState('all')

  return (
    <main className='flex min-h-screen flex-col'>
      <nav className='iQIaBO opacity-100 w-full h-[136px] flex items-center justify-between'>
        <div className='eymLyq'>
          <div className='relative m-0 box-border inline-block max-w-full overflow-hidden'>
            <div className='box-border block max-w-full'>
              {/* <Image alt='asd' aria-hidden='true' role='presentation' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+' style={{maxWidth:'100%',display:'block',margin:0,border:'none',padding:0}} /> */}
            </div>
            {/* <Image alt='asd' className='pages__Logo-sc-7qvdue-3 gHrGCI'  src='/_next/image?url=%2Fimages%2Flogo.svg&amp;w=256&amp;q=75' style={{visibility: 'inherit', position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} /> */}
          </div>
        </div>
        <div className='ffhyrg'>
          <div
            className={`bgltbu${
              filter === 'all'
                ? ' left-[5px] w-[50px]'
                : filter === 'about'
                ? ' left-[55px] w-[68px]'
                : filter === 'projects'
                ? ' left-[129px] w-[77px]'
                : ' left-[215px] w-[65px]'
            }`}
            style={{ transition: 'all 0.3s ease 0s' }}
          />
          <div
            className='jfOnou'
            onClick={() => {
              setFilter('all')
            }}>
            All
          </div>
          <div
            className='jfOnou'
            onClick={() => {
              setFilter('about')
            }}>
            About
          </div>
          <div
            className='jfOnou'
            onClick={() => {
              setFilter('projects')
            }}>
            Projects
          </div>
          <div
            className='jfOnou'
            onClick={() => {
              setFilter('media')
            }}>
            Media
          </div>
        </div>
        <a className='kAkArv' href='mailto:dazum-dev@gmail.com'>
          <p className='kmdqOL' style={{ lineHeight: 'normal' }}>
            Contact
          </p>
        </a>
      </nav>

      <div className='container mx-auto transform-none opacity-100 will-change-auto xl:w-full'>
        <ResponsiveGridLayout
          breakpoints={{ lg: 1199, md: 799, sm: 374, xs: 319 }}
          className='layout mx-auto'
          cols={{ lg: 4, md: 4, sm: 2, xs: 2 }}
          compactType='vertical'
          layouts={pt[filter]}
          margin={[16, 16]}
          rowHeight={280}
          style={{ maxWidth: '1200px' }}
          width={1200}>
          <div className='kJIbky' key='bio'>
            <p className='lFodq'>
              I&apos;m <span style={{ fontSize: '40px' }}>nev</span>, a developer and product designer from Ireland.
              I&apos;m interested in React, Node, Product Design, Jamstack, Startups, Cryptocurrencies and Music.
            </p>
          </div>
          <div className='kJIbky' key='map'>
            <Link href='/explore'>Explore</Link>
          </div>
          <div className='kJIbky' key='recroot'>
            c
          </div>
          <div className='kJIbky' key='spotify'>
            d
          </div>
          <div className='kJIbky' key='twitter'>
            e
          </div>
          <div className='kJIbky' key='vouch-for'>
            f
          </div>
          <div className='kJIbky' key='blog-excerpt'>
            g
          </div>
          <div className='kJIbky' key='wrap'>
            h
          </div>
          <div className='kJIbky' key='night-mode-toggle'>
            i
          </div>
          <div className='kJIbky' key='newsletter'>
            j
          </div>
        </ResponsiveGridLayout>
      </div>
    </main>
  )
}
