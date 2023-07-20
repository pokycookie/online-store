'use client'

import { useEffect, useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

interface IProps {
  children?: React.ReactNode
  aspectRatio: number
  showCount: number
  infinite?: boolean
}

export default function Carousel(props: IProps) {
  const [idx, setIdx] = useState(0)
  const [container, setContainer] = useState<React.ReactNode[][]>([])

  const indexHandler = (delta: number) => {
    let index
    if (props.infinite) {
      index = idx + delta
      if (index < 0) {
        index = container.length - 1
      } else if (index > container.length - 1) {
        index = 0
      }
    } else {
      index = Math.min(Math.max(idx + delta, 0), container.length - 1)
    }
    setIdx(index)
  }

  useEffect(() => {
    const children: React.ReactNode[] = Array.isArray(props.children)
      ? props.children
      : [props.children]
    const container: React.ReactNode[][] = []

    for (let i = 0; i < children.length; i += props.showCount) {
      const viewport: React.ReactNode[] = []
      for (let j = 0; j < props.showCount; j++) {
        const index = i + j
        if (index > children.length - 1) {
          viewport.push(<div></div>)
        } else {
          viewport.push(children[index])
        }
      }
      if (viewport.length > 0) container.push(viewport)
    }

    setContainer(container)
    setIdx(0)
  }, [props.children, props.showCount])

  return (
    <div className="w-full h-fit p-9">
      <div className="relative flex items-center w-full h-fit">
        <div
          className="flex w-full overflow-hidden rounded-lg h-fit"
          style={{ aspectRatio: props.aspectRatio * props.showCount }}
        >
          {container.map((viewport, i) => {
            return (
              <motion.div
                key={i}
                animate={{ x: `-${100 * idx}%` }}
                transition={{ type: 'just' }}
                className="flex w-full h-auto gap-4 shrink-0"
              >
                {viewport.map((node, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full h-full overflow-hidden rounded-lg"
                    >
                      {node}
                    </div>
                  )
                })}
              </motion.div>
            )
          })}
        </div>
        {!props.infinite && idx != 0 ? (
          <button
            onClick={() => indexHandler(-1)}
            className="absolute w-12 h-12 duration-200 bg-white border rounded-full hover:bg-opacity-100 bg-opacity-70 -left-6 hover:scale-105"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        ) : null}
        {!props.infinite && idx != container.length - 1 ? (
          <button
            onClick={() => indexHandler(1)}
            className="absolute w-12 h-12 duration-200 bg-white border rounded-full hover:bg-opacity-100 bg-opacity-70 -right-6 hover:scale-105"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        ) : null}
      </div>
    </div>
  )
}
