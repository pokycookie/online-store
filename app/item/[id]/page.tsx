'use client'

import Carousel from '@/components/ui/carousel'
import Image from 'next/image'
import Dropdown from '@/components/ui/dropdown'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import Counter from '@/components/ui/counter'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import t1 from '@img/item/thumb/t1.jpg'
import t2 from '@img/item/thumb/t2.jpg'
import t3 from '@img/item/thumb/t3.jpg'
import t4 from '@img/item/thumb/t4.jpg'
import t5 from '@img/item/thumb/t5.jpg'
import t6 from '@img/item/thumb/t6.jpg'
import t7 from '@img/item/thumb/t7.jpg'
import detailsImg from '@img/item/details/item-details.png'
import StarRating from '@/components/ui/starRating'
import Review from '@/components/ui/review'
import Pagination from '@/components/ui/pagination'
import QnA from '@/components/ui/QnA'
import Table from '@/components/ui/table'
import useTOC from '@/hooks/useTOC'

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
  const [subHeader, setSubHeader] = useState(0)
  const [isExtended, setIsExtended] = useState(false)

  const infoSectionREF = useRef<HTMLElement>(null)
  const reviewSectionREF = useRef<HTMLElement>(null)
  const qnaSectionREF = useRef<HTMLElement>(null)
  const shippingSectionREF = useRef<HTMLElement>(null)

  const refTargets = [
    infoSectionREF,
    reviewSectionREF,
    qnaSectionREF,
    shippingSectionREF,
  ]

  useTOC(
    refTargets,
    (target) => {
      switch (target) {
        case infoSectionREF.current:
          setSubHeader(0)
          break
        case reviewSectionREF.current:
          setSubHeader(1)
          break
        case qnaSectionREF.current:
          setSubHeader(2)
          break
        case shippingSectionREF.current:
          setSubHeader(3)
          break
        default:
          break
      }
    },
    { rootMargin: '-54px 0px 0px 0px' }
  )

  const totalPrice = useMemo(() => {
    let acc = 0
    for (const key in options) {
      acc += options[key].price * options[key].count
    }
    return acc
  }, [options])

  // value만 사용하도록 이후 수정
  const optionHandler = (label: string, value: string, price: number) => {
    setOptions((prev) => {
      const tmp = { ...prev }
      const count = options[value] ? options[value].count + 1 : 1
      tmp[value] = { label, count, price }
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

  const subHeaderHandler = (i: number) => {
    let top = 0
    switch (i) {
      case 0:
        top = (infoSectionREF.current?.offsetTop ?? 0) - 54 - 10
        break
      case 1:
        top = (reviewSectionREF.current?.offsetTop ?? 0) - 54 - 10
        break
      case 2:
        top = (qnaSectionREF.current?.offsetTop ?? 0) - 54 - 10
        break
      case 3:
        top = (shippingSectionREF.current?.offsetTop ?? 0) - 54 - 10
        break
      default:
        break
    }
    if (top > 0) window.scrollTo({ top, behavior: 'smooth' })
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
      <section className="w-full max-w-4xl">
        <div className="sticky top-0 z-10 flex w-full mb-5 text-sm font-semibold border-t-2 border-gray-300 divide-x divide-gray-300 shadow-lg h-14 border-t-blue-600">
          {subHeaderArr.map((e, i) => {
            return (
              <SubHeaderBtn
                key={i}
                selected={subHeader === i}
                className="w-full"
                onClick={() => subHeaderHandler(i)}
              >
                {e}
              </SubHeaderBtn>
            )
          })}
        </div>
        {/* 상품정보 Section */}
        <section className="w-full" id="infoSection" ref={infoSectionREF}>
          <motion.div
            className="w-full overflow-hidden"
            initial={{ height: '1200px' }}
            animate={{ height: isExtended ? 'fit-content' : '1200px' }}
          >
            {Array(3)
              .fill(0)
              .map((_, i) => {
                return (
                  <Image
                    key={i}
                    src={detailsImg}
                    alt="details"
                    className="object-contain w-full"
                  />
                )
              })}
          </motion.div>
          <button
            onClick={() => setIsExtended((prev) => !prev)}
            className="flex items-center justify-center w-full h-12 gap-2 mt-4 text-blue-600 duration-200 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
          >
            <span>상품정보 {isExtended ? '접기' : '더보기'}</span>
            <FontAwesomeIcon icon={isExtended ? faAngleUp : faAngleDown} />
          </button>
        </section>
        {/* 상품리뷰 Section */}
        <section
          className="w-full mt-5"
          id="reviewSection"
          ref={reviewSectionREF}
        >
          {/* 상품리뷰 title */}
          <div className="flex items-start justify-between w-full pt-5 border-t-2 border-blue-600">
            <div>
              <h4 className="text-2xl font-bold">상품리뷰</h4>
              <p className="mt-2 text-sm text-gray-400">
                상품을 구매한 분들이 작성한 리뷰입니다.
              </p>
            </div>
            <div className="flex flex-col items-end w-36">
              <StarRating value={8} readOnly />
              <span className="flex items-end gap-1 mt-1 text-base">
                <p className="font-semibold text-blue-600">8.0</p>
                <p>/</p>
                <p>10.0</p>
                <p className="text-sm text-gray-500">
                  ({(15400).toLocaleString()})
                </p>
              </span>
            </div>
          </div>
          <ul className="mt-5 border divide-y rounded-md">
            {reviewArr.map((e, i) => {
              return (
                <Review
                  key={i}
                  id={e.id}
                  rate={e.rate}
                  comment={e.comment}
                  updated={e.updated}
                  vote={e.vote}
                />
              )
            })}
          </ul>
          <Pagination />
        </section>
        {/* 상품문의 Section */}
        <section className="w-full mt-5" id="qnaSection" ref={qnaSectionREF}>
          <div className="flex items-start justify-between w-full pt-5 border-t-2 border-blue-600">
            <div>
              <h4 className="text-2xl font-bold">상품문의</h4>
              <p className="mt-2 text-sm text-gray-400">
                상품에 대한 문의를 작성할 수 있는 공간입니다.
              </p>
              <p className="text-sm text-gray-400 ">
                질문에 대한 답변이 작성될 경우 질문을 삭제하실 수 없습니다.
              </p>
              <p className="text-sm text-gray-400 ">
                전화번호, 메일주소와 같은 개인정보는 작성에 주의해 주시기
                바랍니다.
              </p>
            </div>
            <div className="flex flex-col items-end w-36">
              <button className="p-2 pl-4 pr-4 text-sm font-semibold text-gray-700 border border-blue-600 rounded hover:text-white hover:bg-blue-600">
                문의하기
              </button>
            </div>
          </div>
          <ul className="mt-5 border divide-y rounded-md">
            {qnaArr.map((e, i) => {
              return (
                <QnA
                  key={i}
                  id={e.id}
                  vote={e.vote}
                  updated_q={e.updated_q}
                  updated_a={e.updated_a}
                  q={e.q}
                  a={e.a}
                />
              )
            })}
          </ul>
          <Pagination />
        </section>
        {/* 배송/교환/반품 안내 Section */}
        <section
          className="w-full mt-5"
          id="shippingSection"
          ref={shippingSectionREF}
        >
          <div className="flex items-start justify-between w-full pt-5 border-t-2 border-blue-600">
            <h4 className="text-2xl font-bold">배송/교환/반품 안내</h4>
          </div>
          <section>
            <h5 className="mt-8 mb-4 ml-1 font-semibold">배송정보</h5>
            <Table content={deliveryArr} />
          </section>
          <section>
            <h5 className="mt-8 mb-4 ml-1 font-semibold">교환/반품 안내</h5>
            <Table content={returnArr} />
          </section>
          <section>
            <h5 className="mt-8 mb-4 ml-1 font-semibold">판매자정보</h5>
            <Table content={supplyArr} />
          </section>
        </section>
      </section>
    </main>
  )
}

const SubHeaderBtn = styled.button<{ selected: boolean }>((props) => ({
  backgroundColor: props.selected ? '#2563eb' : '#f9fafb',
  color: props.selected ? 'white' : '#4b5563',
}))

const imgArr = [t1, t2, t3, t4, t5, t6, t7]
const subHeaderArr = ['상품정보', '상품리뷰', '상품문의', '배송/교환/반품 안내']

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

const reviewArr = [
  {
    id: 'Cookie',
    updated: new Date(2022, 6, 24),
    rate: 10,
    comment: '아주 이쁘고 좋습니다!\n최고에요!!',
    vote: 7,
  },
  {
    id: 'pokycookie',
    updated: new Date(2022, 6, 27),
    rate: 4,
    comment: '생각보다 별로인데요?\n다들 왜 좋다고 하는건지\n잘 모르겠네요',
    vote: 12,
  },
]

const qnaArr = [
  {
    id: 'Cookie',
    updated_q: new Date(2022, 6, 29),
    updated_a: new Date(2022, 6, 30),
    q: '175cm 남자인데 사이즈 M으로 하면 작나요?',
    a: '안녕하세요 판매자입니다.\n같은 신장 내에서도 맞는 사이즈가 서로 다를 수 있습니다.\n따라서 고객님의 체형에 맞는 사이즈를 제시해드리지 못하는 점 양해바랍니다.',
    vote: 3,
  },
  {
    id: 'poky',
    updated_q: new Date(2022, 7, 13),
    updated_a: new Date(2022, 7, 13),
    q: '이거 옷에 뭐 묻어서 왔는데요?',
    a: '안녕하세요 판매자입니다.\n먼저 오염된 상품이 전달된 점 사과의 말씀 드립니다.\n교환/반품의 경우 따로 교환/반품 페이지를 이용해주시면 감사하겠습니다.',
    vote: 1,
  },
]

const deliveryArr = [
  {
    head: '배송비',
    data: [
      '기본 배송료 3,000원',
      '19,800원 이상 구매시 무료배송',
      '도서산간 지역 추가비용',
    ],
  },
  {
    head: '배송업체',
    data: ['XX택배'],
  },
  {
    head: '묵음배송 여부',
    data: ['가능'],
  },
  {
    head: '배송기간',
    data: [
      '주문 및 결제 완료 후 2~3일',
      '도서 산간 지역 등은 1~2일 추가 소요될 수 있음',
      '천재지변, 물량 수급 변동 등 예외적인 사유 발생 시, 다소 지연될 수 있음',
    ],
  },
]

const returnArr = [
  {
    head: '교환/반품 비용',
    data: [
      '반품배송비 3,000원',
      '교환배송비 6,000원',
      '제품에 문제가 있는 경우 배송비는 판매자가 부담',
    ],
  },
  {
    head: '교환/반품 신청 기준일',
    data: [
      '단순변심에 의한 교환/반품은 제품 수령 후 일주일 이내',
      '상품의 내용이 표시/광고와 다른 경우 수령 후 3개월 이내',
    ],
  },
]

const supplyArr = [
  {
    head: '판매자명',
    data: ['XXX의류'],
  },
  {
    head: '상호/대표자',
    data: ['XXX의류/XXX'],
  },
  {
    head: '상호자번호',
    data: ['000-00-00000'],
  },
  {
    head: '연락처',
    data: ['000-0000-0000'],
  },
  {
    head: 'e-mail',
    data: ['XXX@naver.com'],
  },
  {
    head: '사업장 소재지',
    data: ['서울특별시 XXX XXX 000번길 00'],
  },
]
