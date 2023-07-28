import dayjs from 'dayjs'

interface IProps {
  title: string
  deadline: Date
  cautions: string[]
}

export default function Coupon(props: IProps) {
  return (
    <div className="flex overflow-hidden border rounded-md select-none h-44">
      <div className="p-4 bg-gray-100 grow">
        <h3 className="mb-1 text-xl font-bold text-blue-600">{props.title}</h3>
        <p className="text-sm text-gray-500">
          {dayjs(props.deadline).format('YYYY.MM.DD')} 까지
        </p>
        <ul className="mt-4">
          {props.cautions.map((caution, i) => {
            return (
              <li
                key={i}
                className="text-sm text-gray-400 before:content-['-'] before:mr-2"
              >
                {caution}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-32 bg-gray-200 shrink-0"></div>
    </div>
  )
}
