'use client'

import {
  faStar as starR,
  faStarHalfStroke as starH,
} from '@fortawesome/free-regular-svg-icons'
import { faStar as starS } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

interface IProps {
  value: number
  readOnly?: boolean
  onChange?: (value: number) => void
}

export default function StarRating(props: IProps) {
  const [hover, setHover] = useState<number | null>(null)

  const clickHandler = (index: number) => {
    if (props.onChange) props.onChange(index + 1)
  }

  const enterHandler = (index: number) => {
    setHover(index)
  }

  const leaveHandler = () => {
    setHover(null)
  }

  const iconHandler = (index: number) => {
    const value = hover ?? props.value - 1

    if (value >= index * 2 + 1) {
      return starS
    } else if (value >= index * 2) {
      return starH
    } else {
      return starR
    }
  }

  return (
    <div className="flex w-full text-blue-600">
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className="relative flex items-center justify-center min-w-5 min-h-5 aspect-square grow"
            >
              <FontAwesomeIcon
                className="w-full h-full"
                icon={iconHandler(i)}
              />
              {props.readOnly ? null : (
                <>
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full bg-transparent cursor-pointer"
                    onMouseEnter={() => enterHandler(i * 2)}
                    onMouseLeave={() => leaveHandler()}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-1/2 h-full bg-transparent cursor-pointer"
                    onMouseEnter={() => enterHandler(i * 2 + 1)}
                    onMouseLeave={() => leaveHandler()}
                  ></div>
                </>
              )}
            </div>
          )
        })}
    </div>
  )
}
