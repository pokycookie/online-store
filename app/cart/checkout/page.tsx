import Table from '@/components/ui/table'
import checkoutData from '@mock/checkout.json'
import cartArrData from '@mock/cart.json'
import CartList from '@/components/section/shoppingCart/cartList'

const cartArr = cartArrData.data

export default function CheckoutPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="w-full pb-3 mb-5 text-2xl font-semibold border-b-4 border-blue-600">
        주문/결제
      </h1>
      <section className="w-full mb-7">
        <h2 className="mb-3 ml-1 text-sm font-semibold">구매자정보</h2>
        <Table content={checkoutData.buyer} />
      </section>
      <section className="w-full mb-7">
        <h2 className="mb-3 ml-1 text-sm font-semibold">받는사람정보</h2>
        <Table content={checkoutData.receiver} />
      </section>
      <section className="w-full mb-7">
        <h2 className="mb-3 ml-1 text-sm font-semibold">주문정보</h2>
        <ul className="pl-3 pr-3 border bg-gray-50">
          {cartArr.map((e, i) => {
            return (
              <CartList
                key={i}
                name={e.name}
                options={e.options}
                check={true}
                readOnly
              />
            )
          })}
        </ul>
      </section>
      <section className="w-full mb-7">
        <h2 className="mb-3 ml-1 text-sm font-semibold">결제정보</h2>
        <Table content={checkoutData.payment} />
      </section>
      <button className="w-full h-12 max-w-md text-white bg-blue-600 rounded-md hover:bg-blue-500">
        결제하기
      </button>
    </main>
  )
}
