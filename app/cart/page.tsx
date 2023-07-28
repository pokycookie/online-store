'use client'

import CartList from '@/components/section/shoppingCart/cartList'
import cartArrData from '@mock/cart.json'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

const cartArr = cartArrData.data

export default function CartPage() {
  const [checks, setChecks] = useState<Set<number>>(new Set())
  const [allCheck, setAllCheck] = useState(false)

  const checkHandler = (i: number, checked: boolean) => {
    setChecks((prev) => {
      const tmp = new Set(prev)
      if (checked) tmp.add(i)
      else tmp.delete(i)
      return tmp
    })
    setAllCheck(false)
  }

  const allCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setAllCheck(checked)
    if (checked) setChecks(new Set(cartArr.map((_, i) => i)))
    else setChecks(new Set())
  }

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="w-full pb-3 mb-5 text-2xl font-semibold border-b-4 border-blue-600">
        장바구니
      </h1>
      <section className="w-full mb-5">
        <div className="flex items-center justify-between pt-2 pb-2 border-b border-blue-600">
          <div className="text-sm">
            <label className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={allCheck}
                onChange={allCheckHandler}
              />
              전체선택
            </label>
          </div>
          <div>
            <button className="p-1 pl-2 pr-2 text-xs border border-blue-600 rounded-sm hover:text-white hover:bg-blue-600">
              선택삭제
            </button>
          </div>
        </div>
        <ul>
          {cartArr.map((e, i) => {
            return (
              <CartList
                key={i}
                name={e.name}
                options={e.options}
                check={checks.has(i)}
                onCheck={(checked) => checkHandler(i, checked)}
              />
            )
          })}
        </ul>
        <div className="mt-3 border-b border-blue-600"></div>
      </section>
      <div className="flex flex-col items-end w-full gap-2 pt-3 pb-3">
        <span className="flex items-center justify-between w-full gap-2 text-sm text-gray-500">
          총 상품가격
          <strong className="text-lg text-blue-600">123,456원</strong>
        </span>
        <span className="flex items-center justify-between w-full gap-2 text-sm text-gray-500">
          배송비<strong className="text-lg text-blue-600">0원</strong>
        </span>
        <div className="w-full mt-1 mb-1 border-b border-gray-400"></div>
        <span className="flex items-center justify-between w-full gap-2 text-sm text-gray-500">
          총 주문금액
          <strong className="text-lg text-blue-600">123,456원</strong>
        </span>
      </div>
      <Link
        href="/cart/checkout"
        className="flex items-center justify-center w-full h-12 max-w-md mt-5 text-white bg-blue-600 rounded-md hover:bg-blue-500"
      >
        구매하기
      </Link>
    </main>
  )
}
