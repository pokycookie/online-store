import Coupon from '@/components/ui/coupon'
import Pagination from '@/components/ui/pagination'
import Tag from '@/components/ui/tag'
import mockdata from '@mock/coupon.json'

export default function CouponPage() {
  return (
    <div>
      <section className="flex flex-wrap gap-2 mb-5">
        {couponTypeArr.map((e, i) => {
          return <Tag key={i} label={e} value={e} />
        })}
      </section>
      <section className="flex flex-col gap-4">
        {mockdata.data.map((e, i) => {
          return (
            <Coupon
              key={i}
              title={e.title}
              deadline={new Date(e.deadline)}
              cautions={e.cautions}
            />
          )
        })}
      </section>
      <Pagination />
    </div>
  )
}

const couponTypeArr = ['할인쿠폰', '배송비쿠폰', '중복사용가능', '소멸예정']
