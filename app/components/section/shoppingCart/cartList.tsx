import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent } from 'react'

interface IProps {
  name: string
  options: {
    value: string
    count: number
    label: string
    price: number
  }[]
  check: boolean
  onCheck?: (checked: boolean) => void
}

export default function CartList(props: IProps) {
  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onCheck) props.onCheck(e.target.checked)
  }

  return (
    <li className="pt-3 pb-3">
      <div>
        <label className="flex gap-2">
          <input
            type="checkbox"
            className="accent-blue-600"
            checked={props.check}
            onChange={checkHandler}
          />
          <h3 className="font-semibold text-gray-700">{props.name}</h3>
        </label>
      </div>
      <div className="mt-2 mb-2 border-b"></div>
      <ul>
        {props.options.map((e, i) => {
          return (
            <li
              key={i}
              className="flex items-center justify-between pt-1 pb-1 text-sm text-gray-500"
            >
              <span>
                옵션{i + 1}: {e.label}
              </span>
              <div className="flex gap-4">
                <p className="flex items-center justify-center">
                  {e.price.toLocaleString()}원 × {e.count}개
                </p>
                <p className="flex items-center justify-end w-32">
                  {(e.price * e.count).toLocaleString()}원
                </p>
                <button className="p-1 pl-2 pr-2 text-xs border border-blue-600 rounded-sm hover:text-white hover:bg-blue-600">
                  삭제
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </li>
  )
}
