import { faThumbsUp as thumbsR } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as thumbsS } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  value: number
  voted: boolean
  onChange?: () => void
}

export default function ThumbsUp(props: IProps) {
  return (
    <button
      onClick={props.onChange}
      className="flex items-center justify-center gap-2 p-1 pl-3 pr-3 border border-gray-400 rounded-full hover:border-blue-600 hover:text-blue-600"
    >
      <FontAwesomeIcon
        className="w-4 h-4 text-blue-600"
        icon={props.voted ? thumbsS : thumbsR}
      />
      <span className="text-sm">{props.value + (props.voted ? 1 : 0)}</span>
    </button>
  )
}
