'use client'

import styled from '@emotion/styled'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'

interface IProps {
  children?: React.ReactNode
  value: string | number
  autoClose?: boolean
}

export default function Dropdown(props: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectorREF = useRef<HTMLDivElement>(null)
  const displayREF = useRef<HTMLButtonElement>(null)

  const openHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isOpen) {
      setIsOpen(true)
    } else if (
      displayREF.current &&
      (displayREF.current as HTMLElement).contains(e.target as HTMLElement)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (props.autoClose) {
        setIsOpen(false)
        return
      }

      if (
        selectorREF.current &&
        !(selectorREF.current as HTMLElement).contains(e.target as HTMLElement)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', closeHandler)
    return () => {
      document.removeEventListener('click', closeHandler)
    }
  }, [isOpen, props.autoClose])

  return (
    <div className="relative w-full" ref={selectorREF} onClick={openHandler}>
      <button
        className="flex items-center w-full h-10 border rounded"
        ref={displayREF}
      >
        <div className="flex items-center h-full p-1 pl-3 pr-3 overflow-hidden text-sm text-gray-500 grow whitespace-nowrap text-ellipsis">
          {props.value}
        </div>
        <div className="h-5 border-l"></div>
        <div className="flex items-center justify-center w-10">
          <Icon open={isOpen} icon={faAngleDown} className="duration-300" />
        </div>
      </button>
      {isOpen ? (
        <div className="absolute z-20 w-full mt-2 overflow-x-hidden overflow-y-auto bg-white border rounded shadow-lg h-60">
          {props.children}
        </div>
      ) : null}
    </div>
  )
}

const Icon = styled(FontAwesomeIcon)<{ open: boolean }>((props) => ({
  transform: props.open ? 'rotate(180deg)' : 'rotate(0deg)',
}))
