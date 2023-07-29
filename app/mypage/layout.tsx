'use client'

import styled from '@emotion/styled'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface IProps {
  children: React.ReactNode
}

export default function MyPageLayout({ children }: IProps) {
  const [pageIdx, setPageIdx] = useState(0)

  const pathname = usePathname()

  useEffect(() => {
    const index = linkArr.findIndex((e) => e.regex.test(pathname))
    if (index !== -1) setPageIdx(index)
  }, [pathname])

  return (
    <main className="flex w-full gap-8 p-8">
      <div className="sticky flex flex-col overflow-hidden border divide-y rounded-md top-8 shrink-0 bg-gray-50 h-fit">
        {linkArr.map((e, i) => {
          return (
            <SidebarLink
              key={i}
              selected={pageIdx === i}
              className="w-full p-4 text-xs hover:bg-blue-600 hover:text-white"
              href={e.href}
            >
              {e.title}
            </SidebarLink>
          )
        })}
      </div>
      <div className="grow">{children}</div>
    </main>
  )
}

const linkArr = [
  {
    title: '주문목록',
    href: '/mypage/orderlist',
    regex: /^\/mypage\/orderlist.*$/,
  },
  {
    title: '찜 리스트',
    href: '/mypage/wishlist',
    regex: /^\/mypage\/wishlist.*$/,
  },
  { title: '쿠폰', href: '/mypage/coupon', regex: /^\/mypage\/coupon.*$/ },
  {
    title: '개인정보확인/수정',
    href: '/mypage/userEdit',
    regex: /^\/mypage\/userEdit.*$/,
  },
  {
    title: '배송지 관리',
    href: '/mypage/address',
    regex: /^\/mypage\/address.*$/,
  },
]

const SidebarLink = styled(Link)<{ selected: boolean }>((props) => ({
  backgroundColor: props.selected ? '#2563eb' : '#f3f4f6',
  color: props.selected ? 'white' : 'black',
}))
