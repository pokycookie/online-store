'use client'

import styled from '@emotion/styled'
import { useState } from 'react'

export interface ITag {
  label: string
  value: string
}

export interface IProps extends ITag {
  defaultSelected?: boolean
  onChange?: (selected: boolean) => void
}

export default function Tag(props: IProps) {
  const [selected, setSelected] = useState(props.defaultSelected ?? false)

  const selectHandler = () => {
    setSelected((prev) => !prev)
    if (props.onChange) props.onChange(!selected)
  }

  return (
    <TagButton
      selected={selected}
      className="p-2 pl-4 pr-4 text-xs border rounded-full select-none w-fit h-fit hover:border-blue-600 shrink-0"
      onClick={selectHandler}
    >
      {props.label}
    </TagButton>
  )
}

const TagButton = styled.button<{ selected: boolean }>((props) => ({
  backgroundColor: props.selected ? '#2563eb' : 'transparent',
  color: props.selected ? 'white' : '#52525b',
  borderColor: props.selected ? '#2563eb' : '#e5e7eb',
}))
