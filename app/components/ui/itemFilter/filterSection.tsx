'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tag, { ITag } from '../tag'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import { useState } from 'react'
import { motion } from 'framer-motion'

export interface IFilterData {
  title: string
  tags: ITag[]
  onChange?: (selected: boolean, tag: ITag) => void
}

export default function FilterSection(props: IFilterData) {
  const [extend, setExtend] = useState(false)

  const tagHandler = (selected: boolean, tag: ITag) => {
    if (props.onChange) props.onChange(selected, tag)
  }

  return (
    <motion.section
      className="relative flex w-full overflow-hidden"
      initial={{ height: 69 }}
      animate={{ height: extend ? 'fit-content' : 69 }}
    >
      <button
        className="flex items-start p-4 border-b outline-none w-44 bg-zinc-800 shrink-0 border-zinc-600"
        onClick={() => setExtend((prev) => !prev)}
      >
        <span className="flex items-center justify-between w-full gap-2 text-sm font-semibold text-white h-9">
          <h2>{props.title}</h2>
          <Icon
            open={extend}
            className="w-3 duration-200"
            icon={faChevronDown}
          />
        </span>
      </button>
      <TagSection
        extend={extend}
        className="flex items-center gap-2 p-4 overflow-x-auto overflow-y-hidden border-b grow"
      >
        {props.tags.map((tag, i) => {
          return (
            <Tag
              key={i}
              label={tag.label}
              value={tag.value}
              onChange={(selected) => tagHandler(selected, tag)}
            />
          )
        })}
      </TagSection>
    </motion.section>
  )
}

const TagSection = styled.section<{ extend: boolean }>((props) => ({
  flexWrap: props.extend ? 'wrap' : 'nowrap',
}))

const Icon = styled(FontAwesomeIcon)<{ open: boolean }>((props) => ({
  transform: props.open ? 'rotate(180deg)' : 'rotate(0deg)',
}))
