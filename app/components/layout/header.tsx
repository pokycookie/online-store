import Search from '../ui/search'

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-24 p-8 pt-4 pb-4 gap-7">
      <div className="flex w-full gap-8">
        <h1 className="flex items-center text-2xl font-bold whitespace-nowrap">
          Online Store
        </h1>
        <Search />
      </div>
      <div className="flex gap-4">
        <p className="text-sm font-medium cursor-pointer whitespace-nowrap">
          로그인
        </p>
        <p className="text-sm font-medium cursor-pointer whitespace-nowrap">
          회원가입
        </p>
      </div>
    </header>
  )
}
