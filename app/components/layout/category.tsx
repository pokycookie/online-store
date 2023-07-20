'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Category() {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="h-full">
      <p
        className="flex items-center h-full p-2 pb-3 font-semibold border-b-2 border-transparent cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        카테고리
      </p>
      <motion.div
        className="absolute left-0 z-10 flex justify-center w-screen h-auto overflow-hidden bg-slate-100"
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
                      <Link key={i} href={e.href} className="text-sm">
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
    </div>
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
      { title: '화장품', href: '/' },
      { title: '향수/바디/헤어', href: '/' },
      { title: '슈즈', href: '/' },
      { title: '패션잡화', href: '/' },
      { title: '수입명품', href: '/' },
      { title: '시계/쥬얼리', href: '/' },
    ],
  },
  {
    title: '디지털/가전',
    links: [
      { title: '노트북/태블릿', href: '/' },
      { title: '저장장치/메모리', href: '/' },
      { title: '스마트폰/액세서리', href: '/' },
      { title: '카메라/드론/VR', href: '/' },
      { title: '주방가전', href: '/' },
      { title: 'TV/세탁기/냉장고', href: '/' },
    ],
  },
  {
    title: '식품/유아동',
    links: [
      { title: '가공식품/즉석/간식', href: '/' },
      { title: '커피/음료', href: '/' },
      { title: '건강식품', href: '/' },
      { title: '신선식품', href: '/' },
      { title: '다이어트', href: '/' },
      { title: '출산/유아용품', href: '/' },
      { title: '귀저기/분유', href: '/' },
      { title: '완구', href: '/' },
    ],
  },
  {
    title: '스포츠/취미',
    links: [
      { title: '등산/캠핑/낚시', href: '/' },
      { title: '골프', href: '/' },
      { title: '자전거/킥보드', href: '/' },
      { title: '헬스', href: '/' },
      { title: '스포츠용품', href: '/' },
      { title: '스포츠의류', href: '/' },
      { title: '자동차/블랙박스', href: '/' },
      { title: '반려동물', href: '/' },
    ],
  },
  {
    title: '가구/생활',
    links: [
      { title: '가구/인테리어', href: '/' },
      { title: '침구/커튼', href: '/' },
      { title: 'DIY/원예', href: '/' },
      { title: '수납/욕실/청소', href: '/' },
      { title: '세제/화장지/물티슈', href: '/' },
      { title: '조명', href: '/' },
      { title: '주방', href: '/' },
      { title: '건강/의료', href: '/' },
    ],
  },
  {
    title: '도서',
    links: [
      { title: '소설', href: '/' },
      { title: '시/에세이', href: '/' },
      { title: '아동', href: '/' },
      { title: '참고서', href: '/' },
      { title: '경제', href: '/' },
    ],
  },
]
