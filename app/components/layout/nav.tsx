import Link from 'next/link'
import Category from './category'

export default function Nav() {
  return (
    <nav className="flex items-center w-full h-16 gap-4 p-8 pt-0 pb-0">
      <Category />
      {navLinks.map((e, i) => {
        return (
          <Link
            key={i}
            href={e.href}
            className="flex items-center h-full p-2 pb-3 font-semibold border-b-2 border-transparent hover:border-gray-700"
          >
            {e.title}
          </Link>
        )
      })}
    </nav>
  )
}

interface INavLinks {
  title: string
  href: string
}

const navLinks: INavLinks[] = [
  { title: '베스트', href: '/category/etc' },
  { title: '이벤트', href: '/category/etc' },
  { title: '쿠폰', href: '/category/etc' },
  { title: '최저가', href: '/category/etc' },
]
