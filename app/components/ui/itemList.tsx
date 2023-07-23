import Image from 'next/image'
import { ITag } from './tag'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'

interface IProps {
  img: StaticImport
  title: string
  price: number
  originPrice?: number
  tags: ITag[]
}

export default function ItemList(props: IProps) {
  return (
    <li className="grow w-60 lt800:w-full">
      <Link
        href="/item/12345"
        className="flex flex-col gap-3 p-3 pb-20 rounded-md lt800:pb-3 lt800:flex-row hover:bg-gray-100"
      >
        <div className="flex lt800:basis-52 lt550:hidden">
          <Image
            className="block object-cover rounded-md grow aspect-square"
            src={props.img}
            alt="itemImg"
          />
        </div>
        <div className="flex flex-col pt-1 grow">
          <h3 className="w-full mb-1 overflow-hidden text-sm text-gray-600 whitespace-nowrap text-ellipsis">
            {props.title}
          </h3>
          <span className="flex items-center gap-1 text-xl font-bold">
            <p>{props.price.toLocaleString()}</p>
            <p className="text-base">원</p>
          </span>
          {props.originPrice ? (
            <span className="flex items-center gap-2 text-sm font-normal">
              <del className="text-gray-400">
                {props.originPrice?.toLocaleString()}
              </del>
              <span className="text-blue-600">
                {(
                  ((props.originPrice - props.price) / props.originPrice) *
                  100
                ).toFixed(0)}
                % 할인
              </span>
            </span>
          ) : null}
          <ul className="flex flex-wrap h-4 mt-4 overflow-hidden text-gray-400 gap-x-2 lt800:grow">
            {props.tags.map((tag, i) => {
              return (
                <li className="flex items-center text-xs h-fit" key={i}>
                  #{tag.label}
                </li>
              )
            })}
          </ul>
        </div>
      </Link>
    </li>
  )
}
