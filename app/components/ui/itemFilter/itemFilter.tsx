'use client'

import FilterSection, { IFilterData } from './filterSection'
import IntInput from '../intInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { ITag } from '../tag'

interface IProps {
  data: IFilterData[]
  onChange?: (tags: Set<ITag>) => void
}

export default function ItemFilter(props: IProps) {
  const [startValue, setStartValue] = useState(0)
  const [endValue, setEndValue] = useState(0)
  const [tags, setTags] = useState<Set<ITag>>(new Set())

  const tagHandler = (selected: boolean, tag: ITag) => {
    if (selected) {
      setTags((prev) => {
        const newSet = new Set(prev)
        newSet.add(tag)
        if (props.onChange) props.onChange(newSet)
        return newSet
      })
    } else {
      setTags((prev) => {
        const newSet = new Set(prev)
        newSet.delete(tag)
        if (props.onChange) props.onChange(newSet)
        return newSet
      })
    }
  }

  return (
    <section className="w-full overflow-hidden border rounded-md">
      {props.data.map((e, i) => {
        return (
          <FilterSection
            key={i}
            title={e.title}
            tags={e.tags}
            onChange={tagHandler}
          />
        )
      })}
      <section className="flex w-full">
        <div className="p-4 w-44 bg-zinc-800 shrink-0">
          <span className="flex items-center justify-between w-full gap-2 text-sm font-semibold text-white h-9">
            <h2>가격</h2>
          </span>
        </div>
        <div className="flex items-center justify-start gap-2 p-4 text-gray-500 grow">
          <IntInput
            unit="원"
            value={startValue}
            onChange={(v) => setStartValue(v)}
          />
          ~
          <IntInput
            unit="원"
            value={endValue}
            onChange={(v) => setEndValue(v)}
          />
          <button className="flex items-center justify-center duration-200 border rounded-md w-9 h-9 hover:bg-blue-600 hover:text-white">
            <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
          </button>
        </div>
      </section>
    </section>
  )
}
