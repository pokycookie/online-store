'use client'

import Carousel from '@/components/ui/carousel'
import Image from 'next/image'

import t1 from '@img/item/cloths/t1.jpg'
import t2 from '@img/item/cloths/t2.jpg'
import t3 from '@img/item/cloths/t3.jpg'
import t4 from '@img/item/cloths/t4.jpg'
import t5 from '@img/item/cloths/t5.jpg'
import t6 from '@img/item/cloths/t6.jpg'
import t7 from '@img/item/cloths/t7.jpg'
import Dropdown from '@/components/ui/dropdown'
import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import Counter from '@/components/ui/counter'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

interface IItemOption {
  // label과 price는 따로 참조하도록 변경 예정
  [value: string]: {
    label: string
    price: number
    count: number
  }
}

export default function ItemPage() {
  const [options, setOptions] = useState<IItemOption>({})

  const totalPrice = useMemo(() => {
    let acc = 0
    for (const key in options) {
      acc += options[key].price * options[key].count
    }
    return acc
  }, [options])

  // value만 사용하도록 이후 수정
  const optionHandler = (label: string, value: string, price: number) => {
    console.log('click')
    setOptions((prev) => {
      const tmp = { ...prev }
      const count = options[value] ? options[value].count + 1 : 1
      tmp[value] = { label, count, price }
      console.log(tmp)
      return tmp
    })
  }

  const optionDelHandler = (value: string) => {
    setOptions((prev) => {
      const tmp = { ...prev }
      delete tmp[value]
      return tmp
    })
  }

  const optionCountHandler = (value: string, sign: number) => {
    setOptions((prev) => {
      const tmp = { ...prev }
      const count = Math.max(tmp[value].count + sign, 1)
      tmp[value].count = count
      return tmp
    })
  }

  return (
    <main className="flex flex-col items-center p-8">
      <section className="flex">
        <div className="w-[510px] overflow-hidden rounded-md">
          <Carousel showCount={1} aspectRatio={1}>
            {Array(8)
              .fill(0)
              .map((_, i) => {
                return (
                  <Image
                    key={i}
                    src={imgArr[i % imgArr.length]}
                    alt="itemImg"
                    className="object-cover aspect-square"
                  />
                )
              })}
          </Carousel>
        </div>
        <div className="flex flex-col items-start w-96 shrink-0 p-9">
          <h3 className="mb-4 text-2xl font-semibold">
            라코스테/라코스테 남성 슬림핏 카라티셔츠
          </h3>
          <div className="flex flex-col items-start justify-between gap-2 mb-10">
            <span className="flex items-end gap-3 text-3xl font-bold">
              16,850원
            </span>
            <span className="flex items-center gap-2 ml-1 text-lg">
              <span className="text-xl font-bold text-blue-600">32% 할인</span>
              <del className="text-sm text-gray-400">18,110원</del>
            </span>
          </div>
          <p className="mb-2 text-sm font-semibold">옵션선택</p>
          <Dropdown value="옵션을 선택하세요" autoClose>
            {optionArr.map((e, i) => {
              return (
                <button
                  key={i}
                  className="block w-full pl-3 pr-3 text-sm h-9 text-start hover:bg-blue-600 hover:text-white"
                  onClick={() =>
                    e.soldout
                      ? undefined
                      : optionHandler(e.label, e.value, e.price)
                  }
                >
                  {e.soldout ? (
                    <del className="text-gray-400">{e.label} (품절)</del>
                  ) : (
                    <span>{e.label}</span>
                  )}
                </button>
              )
            })}
          </Dropdown>
          {Object.keys(options).length > 0 ? (
            <ul className="w-full mt-4 border divide-y rounded">
              {Object.keys(options).map((key, i) => {
                return (
                  <li key={i} className="p-3 h-fit">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="h-full text-sm grow">
                        {options[key].label}
                      </span>
                      <button
                        className="w-6 h-6 text-gray-700 bg-gray-200 rounded-sm hover:bg-gray-300"
                        onClick={() => optionDelHandler(key)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <Counter
                        value={options[key].count}
                        onChange={(sign) => optionCountHandler(key, sign)}
                      />
                      <span className="font-semibold text-blue-600">
                        {(
                          options[key].price * options[key].count
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : null}
          <div className="flex items-center justify-between w-full mt-4">
            <span className="text-sm font-semibold">총 상품 금액</span>
            <span className="text-xl font-bold text-blue-600">
              {totalPrice.toLocaleString()}원
            </span>
          </div>
          <button className="w-full h-12 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500">
            구매하기
          </button>
          <div className="flex w-full gap-2 mt-2">
            <button className="flex items-center justify-center w-full h-12 gap-2 text-gray-600 border border-gray-400 rounded-md hover:text-blue-600 hover:border-blue-600">
              <FontAwesomeIcon icon={faHeart} />
              찜하기
            </button>
            <button className="flex items-center justify-center w-full h-12 gap-2 text-gray-600 border border-gray-400 rounded-md hover:text-blue-600 hover:border-blue-600">
              <FontAwesomeIcon icon={faCartShopping} />
              장바구니
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

const imgArr = [t1, t2, t3, t4, t5, t6, t7]

const optionArr = [
  { label: '화이트 S', soldout: false, value: 'whiteS', price: 16850 },
  { label: '화이트 M', soldout: true, value: 'whiteM', price: 16850 },
  { label: '화이트 L', soldout: false, value: 'whiteL', price: 16850 },
  { label: '화이트 XL', soldout: false, value: 'whiteXL', price: 16850 },
  { label: '블랙 S', soldout: false, value: 'blackS', price: 16850 },
  { label: '블랙 M', soldout: false, value: 'blackM', price: 16850 },
  { label: '블랙 L', soldout: true, value: 'blackL', price: 16850 },
  { label: '블랙 XL', soldout: false, value: 'blackXL', price: 16850 },
  { label: '베이지 S', soldout: true, value: 'beigeS', price: 16850 },
  { label: '베이지 M', soldout: true, value: 'beigeM', price: 16850 },
  { label: '베이지 L', soldout: false, value: 'beigeL', price: 16850 },
  { label: '베이지 XL', soldout: true, value: 'beigeXL', price: 16850 },
  { label: '블루 S', soldout: false, value: 'blueS', price: 16850 },
  { label: '블루 M', soldout: false, value: 'blueM', price: 16850 },
  { label: '블루 L', soldout: true, value: 'blueL', price: 16850 },
  { label: '블루 XL', soldout: true, value: 'blueXL', price: 16850 },
]
