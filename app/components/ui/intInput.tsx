'use client'

import styled from '@emotion/styled'
import { ChangeEvent, ClipboardEvent, KeyboardEvent, useState } from 'react'

interface IProps {
  unit?: string
  separator?: boolean
}

export default function IntInput(props: IProps) {
  const [input, setInput] = useState('0')
  const [value, setValue] = useState(0)
  const [focus, setFocus] = useState(false)

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.nativeEvent.key
    const ctrl = e.nativeEvent.ctrlKey

    const allowKey = new Set([
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ])
    if (!(/^[0-9]$/.test(key) || allowKey.has(key) || (ctrl && key === 'v'))) {
      e.preventDefault()
    }
  }

  const pasteHandler = (e: ClipboardEvent<HTMLInputElement>) => {
    const clipboard = e.clipboardData.getData('text')
    for (const char of clipboard.split('')) {
      if (!/^[0-9]$/.test(char)) {
        e.preventDefault()
        break
      }
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replaceAll(/,/g, ''))

    if (Number.isNaN(value)) return

    setValue(value)
    setInput(value.toLocaleString())
  }

  return (
    <FocusDiv
      focus={focus}
      className="flex items-center w-40 gap-1 p-2 pl-3 pr-3 border rounded-md"
    >
      <input
        className="w-full text-sm text-right text-gray-500 outline-none"
        value={input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        onPaste={pasteHandler}
      />
      {props.unit && (
        <span className="text-sm text-gray-500">{props.unit}</span>
      )}
    </FocusDiv>
  )
}

const FocusDiv = styled.div<{ focus: boolean }>((props) => ({
  borderColor: props.focus ? '#2563eb' : '#e5e7eb',
}))
