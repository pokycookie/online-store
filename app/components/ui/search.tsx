'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search() {
  return (
    <div className="flex justify-between w-full max-w-lg gap-3 p-3 pl-5 pr-5 border rounded-full">
      <input
        type="text"
        placeholder="당신이 상상하는 무엇이든 검색하세요!"
        className="w-full text-sm outline-none"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="w-3 h-auto cursor-pointer"
      />
    </div>
  )
}
