import { IFilterData } from '@/components/ui/itemFilter/filterSection'
import ItemFilter from '@/components/ui/itemFilter/itemFilter'
import ItemList from '@/components/ui/itemList'

import t1 from '@img/item/cloths/t1.jpg'
import t2 from '@img/item/cloths/t2.jpg'
import t3 from '@img/item/cloths/t3.jpg'
import t4 from '@img/item/cloths/t4.jpg'
import t5 from '@img/item/cloths/t5.jpg'
import t6 from '@img/item/cloths/t6.jpg'
import t7 from '@img/item/cloths/t7.jpg'

export default function ItemPage() {
  return (
    <main className="p-8">
      <ItemFilter data={filterData} />
      <ul className="flex flex-wrap justify-between mt-10 lt800:flex-col">
        {Array(50)
          .fill(0)
          .map((_, i) => {
            return (
              <ItemList
                title="[갤러리아] 까르피 스톤아일랜드 V0055 PK티셔츠"
                price={165540}
                originPrice={178000}
                tags={[
                  { label: '무료배송', value: 'v' },
                  { label: '이벤트할인', value: 'v' },
                ]}
                img={imgArr[i % imgArr.length]}
                key={i}
              />
            )
          })}
      </ul>
    </main>
  )
}

const imgArr = [t1, t2, t3, t4, t5, t6, t7]

const filterData: IFilterData[] = [
  {
    title: '브랜드',
    tags: [
      { label: '나이키', value: 'v' },
      { label: '휠라', value: 'v' },
      { label: '아디다스', value: 'v' },
      { label: '스톤아일랜드', value: 'v' },
      { label: '언더아머', value: 'v' },
      { label: '레노마', value: 'v' },
      { label: '뉴발란스', value: 'v' },
      { label: '파파브로', value: 'v' },
      { label: '리바이스', value: 'v' },
      { label: '아이우먼', value: 'v' },
      { label: '코지', value: 'v' },
      { label: '잠뱅이', value: 'v' },
      { label: '시에로', value: 'v' },
      { label: '뱅벙', value: 'v' },
      { label: '게스', value: 'v' },
      { label: '엘케이트', value: 'v' },
      { label: '닉스', value: 'v' },
    ],
  },
  {
    title: '카테고리',
    tags: [
      { label: '상의', value: 'v' },
      { label: '하의', value: 'v' },
      { label: '아우터', value: 'v' },
      { label: '수트', value: 'v' },
      { label: '운동복', value: 'v' },
      { label: '테마의류', value: 'v' },
      { label: '수영복', value: 'v' },
      { label: '카테고리1', value: 'v' },
      { label: '카테고리2', value: 'v' },
      { label: '카테고리3', value: 'v' },
      { label: '카테고리4', value: 'v' },
      { label: '카테고리5', value: 'v' },
    ],
  },
  {
    title: '배송/혜택',
    tags: [
      { label: '무료배송', value: 'v' },
      { label: '당일배송', value: 'v' },
      { label: '해외직구', value: 'v' },
      { label: '이벤트할인', value: 'v' },
      { label: '무료교환반품', value: 'v' },
    ],
  },
]
