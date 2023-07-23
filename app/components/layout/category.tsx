'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Category() {
  const [isHover, setIsHover] = useState(false)

  return (
    <section className="h-full">
      <p
        className="flex items-center h-full p-2 pb-3 font-semibold border-b-2 border-transparent cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        카테고리
      </p>
      <motion.div
        className="absolute left-0 z-10 flex justify-center h-auto overflow-hidden text-white bg-blue-600 w-vw"
        initial={{ height: 0 }}
        animate={{ height: isHover ? 'fit-content' : 0 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex w-full gap-8 p-8 max-w-7xl">
          {categoryData.map((e, i) => {
            return (
              <div key={i} className="h-fit">
                <h3 className="mb-5 font-semibold">{e.title}</h3>
                <div className="flex flex-col gap-2">
                  {e.links.map((e, i) => {
                    return (
                      <Link
                        key={i}
                        href={e.href}
                        className="text-sm text-zinc-200 whitespace-nowrap hover:text-white"
                        onFocus={() => setIsHover(true)}
                        onBlur={() => setIsHover(false)}
                      >
                        {e.title}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

interface ICategoryData {
  title: string
  links: {
    title: string
    href: string
  }[]
}

const categoryData: ICategoryData[] = [
  {
    title: '패션/뷰티',
    links: [
      { title: '화장품', href: '/category/etc' },
      { title: '향수/바디/헤어', href: '/category/etc' },
      { title: '슈즈', href: '/category/etc' },
      { title: '패션잡화', href: '/category/etc' },
      { title: '수입명품', href: '/category/etc' },
      { title: '시계/쥬얼리', href: '/category/etc' },
    ],
  },
  {
    title: '디지털/가전',
    links: [
      { title: '노트북/태블릿', href: '/category/etc' },
      { title: '저장장치/메모리', href: '/category/etc' },
      { title: '스마트폰/액세서리', href: '/category/etc' },
      { title: '카메라/드론/VR', href: '/category/etc' },
      { title: '주방가전', href: '/category/etc' },
      { title: 'TV/세탁기/냉장고', href: '/category/etc' },
    ],
  },
  {
    title: '식품/유아동',
    links: [
      { title: '가공식품/즉석/간식', href: '/category/etc' },
      { title: '커피/음료', href: '/category/etc' },
      { title: '건강식품', href: '/category/etc' },
      { title: '신선식품', href: '/category/etc' },
      { title: '다이어트', href: '/category/etc' },
      { title: '출산/유아용품', href: '/category/etc' },
      { title: '귀저기/분유', href: '/category/etc' },
      { title: '완구', href: '/category/etc' },
    ],
  },
  {
    title: '스포츠/취미',
    links: [
      { title: '등산/캠핑/낚시', href: '/category/etc' },
      { title: '골프', href: '/category/etc' },
      { title: '자전거/킥보드', href: '/category/etc' },
      { title: '헬스', href: '/category/etc' },
      { title: '스포츠용품', href: '/category/etc' },
      { title: '스포츠의류', href: '/category/etc' },
      { title: '자동차/블랙박스', href: '/category/etc' },
      { title: '반려동물', href: '/category/etc' },
    ],
  },
  {
    title: '가구/생활',
    links: [
      { title: '가구/인테리어', href: '/category/etc' },
      { title: '침구/커튼', href: '/category/etc' },
      { title: 'DIY/원예', href: '/category/etc' },
      { title: '수납/욕실/청소', href: '/category/etc' },
      { title: '세제/화장지/물티슈', href: '/category/etc' },
      { title: '조명', href: '/category/etc' },
      { title: '주방', href: '/category/etc' },
      { title: '건강/의료', href: '/category/etc' },
    ],
  },
  {
    title: '도서',
    links: [
      { title: '소설', href: '/category/etc' },
      { title: '시/에세이', href: '/category/etc' },
      { title: '아동', href: '/category/etc' },
      { title: '참고서', href: '/category/etc' },
      { title: '경제', href: '/category/etc' },
    ],
  },
]
