import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5 w-vw">
      <span className="flex flex-col items-center gap-3 text-base font-semibold text-gray-500">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="text-gray-300 w-14"
        />
        잘못된 페이지 접근입니다
      </span>
      <Link
        href="/"
        className="p-3 pl-5 pr-5 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-lg"
      >
        메인 페이지로 돌아가기
      </Link>
    </main>
  )
}
