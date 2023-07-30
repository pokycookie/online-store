'use client'

import mockdata from '@mock/address.json'

export default function AddressPage() {
  return (
    <div>
      <ul className="mb-5 overflow-hidden border divide-y rounded-md">
        {mockdata.data.map((e, i) => {
          return (
            <li key={i} className="p-4">
              <div className="flex items-center gap-5 mb-5">
                <h4 className="text-lg font-semibold text-gray-700">
                  {e.title}
                </h4>
                {e.default && (
                  <div className="p-1 pl-3 pr-3 text-xs text-blue-600 border border-blue-600 rounded-full">
                    기본배송지
                  </div>
                )}
              </div>
              <p className="mb-1 text-sm text-gray-500">{e.address}</p>
              <p className="mb-3 text-sm text-gray-500">{e.phone}</p>
              <p className="text-sm text-gray-500">요청사항: {e.memo}</p>
              <div className="flex items-center justify-end gap-2">
                {!e.default && (
                  <button className="p-1 pl-2 pr-2 text-sm text-blue-600 border border-blue-600 rounded">
                    기본배송지로 변경
                  </button>
                )}
                <button className="p-1 pl-2 pr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-500">
                  수정
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      <button className="w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-500">
        배송지 추가
      </button>
    </div>
  )
}
