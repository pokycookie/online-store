import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {}

export default function Pagination(props: IProps) {
  return (
    <div className="flex items-center justify-center w-full pt-5 pb-5">
      <div className="flex overflow-hidden border divide-x rounded">
        <button className="w-8 h-8 text-gray-700 bg-gray-100 hover:bg-gray-200">
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <button className="w-8 h-8 text-gray-700 bg-gray-100 hover:bg-gray-200">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <ul className="flex divide-x">
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return (
                <li
                  key={i}
                  className="flex items-center justify-center h-8 pl-1 pr-1 text-sm text-gray-700 cursor-pointer min-w-8 hover:bg-blue-600 hover:text-white"
                >
                  {i + 1}
                </li>
              )
            })}
        </ul>
        <button className="w-8 h-8 text-gray-700 bg-gray-100 hover:bg-gray-200">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button className="w-8 h-8 text-gray-700 bg-gray-100 hover:bg-gray-200">
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
    </div>
  )
}
