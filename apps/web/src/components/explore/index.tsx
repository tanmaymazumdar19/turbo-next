'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, ChevronRightIcon, Cross2Icon } from '@radix-ui/react-icons'
import * as Tabs from '@radix-ui/react-tabs'
import type { PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'

import { useExplore } from '../../context/explore'
import type { DataItem } from '../../data/explore-data'
import { content } from '../../data/explore-data'
import './styles.css'

export interface DeletePromptProps {
  onCancel: () => void
}

function DeletePrompt(props: DeletePromptProps): JSX.Element {
  return (
    <div className='mx-auto my-0 w-fit rounded-lg bg-gray-50 p-4'>
      <p className=''>Are you sure you want to delete this element?</p>

      <div className='mt-2 flex w-full justify-around gap-x-2'>
        <button className='Button mauve' onClick={props.onCancel} type='button'>
          Cancel
        </button>
        <button className='Button red' onClick={props.onCancel} type='button'>
          Yes
        </button>
      </div>
    </div>
  )
}

export interface Field {
  disabled: boolean
  id: number
  label: string
  value: string | number | undefined
}

export interface ElementOptionsProps {
  onDeleteElement: () => void
  onOpenPropertiesModal: () => void
}

function ElementOptions(props: ElementOptionsProps): JSX.Element {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className='w-fit cursor-pointer rounded-lg p-3 hover:bg-green-100'>
          <HamburgerMenuIcon />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
          <DropdownMenu.Item className='DropdownMenuItem' onSelect={props.onOpenPropertiesModal}>
            Properties<div className='RightSlot'>⌘+P</div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className='DropdownMenuSeparator' />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className='DropdownMenuSubTrigger'>
              Add
              <div className='RightSlot'>
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>

            <DropdownMenu.Portal>
              <DropdownMenu.SubContent alignOffset={-5} className='DropdownMenuSubContent' sideOffset={2}>
                <DropdownMenu.Item className='DropdownMenuItem'>Responsive Row</DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>Grid</DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>Markdown</DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>Section</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Item className='DropdownMenuItem'>Move Up</DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem'>Move Down</DropdownMenu.Item>

          <DropdownMenu.Separator className='DropdownMenuSeparator' />

          <DropdownMenu.Item className='DropdownMenuItem'>Clone</DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem' onSelect={props.onDeleteElement}>
            Delete<div className='RightSlot'>⌘+Delete</div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export interface PropertyModalProps {
  fields: Field[]
  onCloseModal: () => void
  open: boolean
}

function PropertyModal(props: PropertyModalProps): JSX.Element {
  const explore = useExplore()
  return (
    <Dialog.Root open={props.open}>
      <Dialog.Portal>
        <Dialog.Overlay className='DialogOverlay' />
        <Dialog.Content className='DialogContent'>
          <Dialog.Title className='DialogTitle'>Properties</Dialog.Title>
          <Tabs.Root className='TabsRoot' defaultValue='tab1'>
            <Tabs.List aria-label='Element Properties' className='TabsList'>
              <Tabs.Trigger className='TabsTrigger' value='tab1'>
                General
              </Tabs.Trigger>
              <Tabs.Trigger className='TabsTrigger' value='tab2'>
                Render
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='TabsContent' value='tab1'>
              {props.fields.map((field: Field) => (
                <fieldset className='Fieldset' key={field.id}>
                  <label className='Label' htmlFor={field.label}>
                    {field.label}
                  </label>
                  <input className='Input' defaultValue={field.value} disabled={field.disabled} id={field.label} />
                </fieldset>
              ))}
            </Tabs.Content>
            <Tabs.Content className='TabsContent' value='tab2'>
              <textarea />
            </Tabs.Content>
          </Tabs.Root>
          <div className='DialogBottom'>
            <Dialog.Close asChild>
              <button
                className='Button green'
                onClick={() => {
                  explore.showToast()
                  props.onCloseModal()
                }}
                type='button'>
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button aria-label='Close' className='IconButton' onClick={props.onCloseModal} type='button'>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export interface ElementProp {
  id: string | null
  type: string | null
  parent?: string | null
  columns?: number | null
  children?: ElementProp[]
}

export interface ContentViewerProps extends ContentLoaderProps {
  data: ElementProp
  id: string
  children?: ElementProp[]
}

export interface ElementWrapper extends PropsWithChildren {
  data: ElementProp
}

function EditWrapper(props: ElementWrapper): JSX.Element {
  const [properties, setProperties] = useState<boolean>(false)
  const [deletePrompt, setDeletePrompt] = useState<boolean>(false)
  const explore = useExplore()

  const data = props.data
  const fields: Field[] = []

  fields.push({ id: 1, label: 'id', value: data.id as string, disabled: true })
  fields.push({ id: 2, label: 'type', value: data.type as string, disabled: true })
  data.parent && fields.push({ id: 3, label: 'parent', value: data.parent, disabled: false })
  data.columns && fields.push({ id: 4, label: 'columns', value: data.columns, disabled: false })

  function onTogglePropertiesModal(): void {
    setProperties((prev: boolean) => !prev)
  }

  function onDeleteElementPrompt(): void {
    setDeletePrompt((prev: boolean) => !prev)
  }

  return explore.editMode.get ? (
    <div className='relative w-full border border-gray-100 pt-11'>
      <div className='overlay-btn absolute right-0 top-0 flex gap-x-1 rounded-sm px-1 py-1'>
        <p className='mr-2 mt-2 font-mono text-gray-400'>[{data.type}]</p>
        <ElementOptions onDeleteElement={onDeleteElementPrompt} onOpenPropertiesModal={onTogglePropertiesModal} />
        <PropertyModal fields={fields} onCloseModal={onTogglePropertiesModal} open={properties} />
      </div>
      {deletePrompt ? <DeletePrompt onCancel={onDeleteElementPrompt} /> : null}

      {props.children}
    </div>
  ) : (
    <>{props.children}</>
  )
}

function PageElement(props: ContentViewerProps): JSX.Element {
  const data = props.data

  return (
    <EditWrapper data={data}>
      {data.children ? (
        <>
          {data.children.map((child: ElementProp) => (
            <ContentLoader id={child.id as string} key={child.id} />
          ))}
        </>
      ) : (
        <p className='font-mono text-gray-400'>[{data.type}]</p>
      )}
    </EditWrapper>
  )
}

function ResponsiveRowElement(props: ContentViewerProps): JSX.Element {
  const data = props.data

  return (
    <EditWrapper data={data}>
      {(data.children as DataItem[]).length > 0 ? (
        <>
          {(data.children as DataItem[]).map((child: ElementProp) => (
            <ContentLoader id={child.id as string} key={child.id} />
          ))}
        </>
      ) : (
        <p className='font-mono text-gray-400'>[{data.type}]</p>
      )}
    </EditWrapper>
  )
}

function ContentViewer(props: ContentViewerProps): JSX.Element {
  const data = props.data

  function getContent(type: string): JSX.Element {
    switch (type) {
      case 'page':
        return <PageElement {...props} />
      case 'responsive-row':
        return <ResponsiveRowElement {...props} />
      default:
        return <p>[missing content]</p>
    }
  }

  return data.type ? getContent(data.type) : <></>
}

export interface ContentLoaderProps {
  id?: string
}

function ContentLoader(props: ContentLoaderProps): JSX.Element {
  const [data, setData] = useState<ElementProp>({
    id: null,
    type: null,
  })
  const explore = useExplore()

  const id: string = props.id || (explore.id as string)

  useEffect(() => {
    if (id) {
      setData(content(id) as ElementProp)
    }
  }, [id])

  return <ContentViewer data={data} id={id} />
}

export default function Explore(): JSX.Element {
  return <ContentLoader />
}
