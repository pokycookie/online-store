import Link from 'next/link'
import Search from '../ui/search'

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-24 p-8 pt-4 pb-4 gap-7">
      <div className="flex w-full gap-8">
        <Link
          className="flex items-center text-2xl font-bold whitespace-nowrap"
          href="/"
        >
          Online Store
        </Link>
        <Search />
      </div>
      <div className="flex gap-4">
        <Link
          className="text-sm font-medium cursor-pointer whitespace-nowrap hover:text-blue-600"
          href="/login"
        >
          로그인
        </Link>
        <Link
          className="text-sm font-medium cursor-pointer whitespace-nowrap hover:text-blue-600"
          href="/signup"
        >
          회원가입
        </Link>
      </div>
    </header>
  )
}
