'use client'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  value: number
  onChange?: (sign: number) => void
}

export default function Counter(props: IProps) {
  const changeHandler = (sign: number) => {
    if (props.onChange) props.onChange(sign)
  }

  return (
    <div className="flex border rounded-sm w-fit">
      <button
        onClick={() => changeHandler(-1)}
        className="flex items-center justify-center text-gray-700 bg-gray-200 w-7 h-7 hover:bg-blue-600 hover:text-white"
      >
        <FontAwesomeIcon className="w-3 h-3" icon={faMinus} />
      </button>
      <span className="flex items-center justify-center w-10">
        {props.value}
      </span>
      <button
        onClick={() => changeHandler(1)}
        className="flex items-center justify-center text-gray-700 bg-gray-200 w-7 h-7 hover:bg-blue-600 hover:text-white"
      >
        <FontAwesomeIcon className="w-3 h-3" icon={faPlus} />
      </button>
    </div>
  )
}
