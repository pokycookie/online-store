import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex items-center w-full h-16 gap-4 p-8 pt-3 pb-3 border-b border-gray-200">
      <p className="p-2 pb-3 font-semibold border-b-2 border-transparent cursor-pointer">
        카테고리
      </p>
      {navLinks.map((e, i) => {
        return (
          <Link
            key={i}
            href={e.href}
            className="p-2 pb-3 font-semibold border-b-2 border-transparent hover:border-gray-700"
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
  { title: '베스트', href: '/' },
  { title: '이벤트', href: '/' },
  { title: '쿠폰', href: '/' },
  { title: '최저가', href: '/' },
]
