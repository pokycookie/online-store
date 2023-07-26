import { useMemo, useState } from 'react'
import StarRating from './starRating'
import ThumbsUp from './thumbsUp'
import dayjs from 'dayjs'

interface IProps {
  id: string
  updated: Date
  rate: number
  comment: string
  vote: number
}

export default function Review(props: IProps) {
  const [voted, setVoted] = useState(false)

  const maskedID = useMemo(() => {
    if (props.id.length < 4) {
      return '***'
    } else {
      const slice = props.id.slice(0, -3)
      return `${slice}***`
    }
  }, [props.id])

  return (
    <li className="p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-semibold text-blue-600">{maskedID}</span>
          <span className="text-sm text-gray-400">
            {dayjs(props.updated).format('YYYY.MM.DD')}
          </span>
        </div>
        <div className="w-24">
          <StarRating value={props.rate} readOnly />
        </div>
      </div>
      <span className="block w-full mt-4 text-sm text-gray-600 whitespace-pre-line">
        {props.comment}
      </span>
      <div className="flex items-center justify-end w-full gap-3">
        <span className="text-xs text-gray-500">
          이 리뷰가 도움이 되었나요?
        </span>
        <ThumbsUp
          voted={voted}
          value={props.vote}
          onChange={() => setVoted((prev) => !prev)}
        />
      </div>
    </li>
  )
}
