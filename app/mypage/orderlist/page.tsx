import CartList from '@/components/section/shoppingCart/cartList'
import Pagination from '@/components/ui/pagination'
import Tag from '@/components/ui/tag'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import {
  faCartShopping,
  faRightLeft,
  faTruck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mockdata from '@mock/orderlist.json'
import dayjs from 'dayjs'

export default function OrderListPage() {
  return (
    <>
      <section className="flex flex-wrap gap-2 mb-5">
        {Array(6)
          .fill(0)
          .map((_, i) => {
            return (
              <Tag
                key={i}
                label={`${new Date().getFullYear() - i}년`}
                value={`$gt${new Date().getFullYear() - i}`}
              />
            )
          })}
      </section>
      <ul className="flex flex-col gap-5">
        {mockdata.data.map((e, i) => {
          return (
            <li key={i} className="p-3 border rounded-md">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-md">
                  <p>{dayjs(e.order).format('YYYY.MM.DD')} 주문</p>
                  {e.arrived && (
                    <>
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      <p>{dayjs(e.arrived).format('YYYY.MM.DD')} 도착</p>
                    </>
                  )}
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  {e.arrived ? '배송완료' : '배송중'}
                </span>
              </div>
              <ul>
                <CartList
                  name={e.name}
                  check={true}
                  options={e.options}
                  readOnly
                />
              </ul>
              <div className="flex items-center gap-3 pt-3 border-t">
                <button className="flex items-center justify-center h-12 gap-2 text-gray-600 border border-gray-400 rounded-md grow hover:text-blue-600 hover:border-blue-600">
                  <FontAwesomeIcon icon={faCartShopping} />
                  장바구니
                </button>
                {e.arrived ? (
                  <>
                    <button className="flex items-center justify-center h-12 gap-2 pl-1 pr-1 text-gray-600 border border-gray-400 rounded-md grow shrink-0 hover:text-blue-600 hover:border-blue-600">
                      <FontAwesomeIcon icon={faRightLeft} />
                      교환/반품 신청
                    </button>
                    <button className="flex items-center justify-center h-12 gap-2 pl-1 pr-1 text-gray-600 border border-gray-400 rounded-md grow shrink-0 hover:text-blue-600 hover:border-blue-600">
                      <FontAwesomeIcon icon={faComment} />
                      리뷰 작성
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex items-center justify-center h-12 gap-2 pl-1 pr-1 text-gray-600 border border-gray-400 rounded-md grow shrink-0 hover:text-blue-600 hover:border-blue-600">
                      <FontAwesomeIcon icon={faTruck} />
                      배송조회
                    </button>
                    <button className="flex items-center justify-center h-12 gap-2 pl-1 pr-1 text-gray-600 border border-gray-400 rounded-md grow shrink-0 hover:text-blue-600 hover:border-blue-600">
                      <FontAwesomeIcon icon={faComment} />
                      판매자 문의
                    </button>
                  </>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <Pagination />
    </>
  )
}
