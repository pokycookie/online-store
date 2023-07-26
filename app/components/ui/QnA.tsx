import { useMemo, useState } from 'react'
import ThumbsUp from './thumbsUp'
import dayjs from 'dayjs'

interface IProps {
  id: string
  updated_q: Date
  updated_a: Date
  q: string
  a: string
  vote: number
}

export default function QnA(props: IProps) {
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
            {dayjs(props.updated_q).format('YYYY.MM.DD')}
          </span>
        </div>
        <div className="w-fit">
          <span className="block p-1 pl-2 pr-2 text-sm text-white bg-gray-600 rounded w-fit">
            질문
          </span>
        </div>
      </div>
      <div className="mt-4">
        <span className="block text-sm text-gray-600 whitespace-pre-line grow">
          {props.q}
        </span>
      </div>
      <div className="mt-4 mb-4 border-b"></div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-semibold text-blue-600">판매자</span>
          <span className="text-sm text-gray-400">
            {dayjs(props.updated_a).format('YYYY.MM.DD')}
          </span>
        </div>
        <div className="w-fit">
          <span className="block p-1 pl-2 pr-2 text-sm text-white bg-blue-600 rounded w-fit">
            답변
          </span>
        </div>
      </div>
      <div className="mt-4">
        <span className="block text-sm text-gray-600 whitespace-pre-line grow">
          {props.a}
        </span>
      </div>
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
