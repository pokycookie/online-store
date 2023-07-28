'use client'

import Pagination from '@/components/ui/pagination'
import useAllCheck from '@/hooks/useAllCheck'
import mokedata from '@mock/wishlist.json'

export default function WishListPage() {
  const { allCheck, allCheckHandler, checkHandler, checks } = useAllCheck(
    mokedata.data.length
  )

  return (
    <div>
      <div className="flex items-center justify-between p-3 border-b border-blue-600">
        <label className="flex items-center gap-3 text-sm grow">
          <input
            type="checkbox"
            className="accent-blue-600"
            checked={allCheck}
            onChange={(e) => allCheckHandler(e.target.checked)}
          />
          전체선택
        </label>
        <div className="flex gap-2 shrink-0">
          <button className="p-1 pl-2 pr-2 text-xs border border-blue-600 rounded-sm hover:text-white hover:bg-blue-600">
            장바구니 담기
          </button>
          <button className="p-1 pl-2 pr-2 text-xs border border-blue-600 rounded-sm hover:text-white hover:bg-blue-600">
            삭제
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-3 pt-3 pb-3">
        {mokedata.data.map((e, i) => {
          return (
            <li
              key={i}
              className="flex items-center justify-between p-3 border rounded-md"
            >
              <label className="flex gap-3 grow">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={checks.has(i)}
                  onChange={(e) => checkHandler(i, e.target.checked)}
                />
                <p className="font-semibold">{e.name}</p>
              </label>
              <p className="text-sm text-blue-600">
                {e.price.toLocaleString()}원
              </p>
            </li>
          )
        })}
      </ul>
      <Pagination />
    </div>
  )
}
