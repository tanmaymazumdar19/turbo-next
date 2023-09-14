export interface DataItem {
  id: string
  type: string
  parent?: string
  children?: DataItem[]
  columns?: number
}

const data = [
  {
    id: 'main',
    type: 'page',
  },
  {
    id: 'rrow-1',
    type: 'responsive-row',
    parent: 'main',
    columns: 2,
  },
]

export function content(id: string): DataItem | undefined {
  const item: DataItem | undefined = data.find((d: DataItem) => d.id === id)

  if (item) {
    item.children = data.filter((d: DataItem) => d.parent === id)
  }

  return item
}
