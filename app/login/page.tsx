'use client'

import { useState } from 'react'
import LabelInput from '../components/ui/labelInput'
import Link from 'next/link'
import Image from 'next/image'

import kakao from '@img/oauth/kakao.png'
import facebook from '@img/oauth/facebook.png'
import naver from '@img/oauth/naver.png'
import google from '@img/oauth/google.svg'
import OauthBtn from '../components/ui/oauthBtn'

export default function Login() {
  const [id, setID] = useState('')
  const [pw, setPW] = useState('')

  return (
    <main className="flex justify-center w-full p-8">
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="mb-5 text-lg font-semibold">로그인</h1>
        <LabelInput
          type="text"
          lable="아이디"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <LabelInput
          type="password"
          lable="비밀번호"
          value={pw}
          onChange={(e) => setPW(e.target.value)}
        />
        <div className="flex justify-between w-full pl-1 pr-1 mb-3">
          <label className="flex gap-2 text-sm">
            <input type="checkbox" title="text" />
            자동로그인
          </label>
          <div className="flex justify-end gap-2">
            <Link
              className="text-sm text-gray-500 hover:text-gray-400"
              href="/"
            >
              아이디/비밀번호 찾기
            </Link>
            <div className="border-r border-gray-400"></div>
            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-400"
              href="/"
            >
              회원가입
            </Link>
          </div>
        </div>
        <button className="w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-500">
          로그인
        </button>
        <div className="w-full mt-4 mb-4 border-b border-gray-300"></div>
        <div className="flex justify-center w-full gap-5">
          <OauthBtn>
            <Image src={kakao} alt="oauth" />
          </OauthBtn>
          <OauthBtn>
            <Image src={naver} alt="oauth" />
          </OauthBtn>
          <OauthBtn border="#96a0b5">
            <Image src={google} alt="oauth" className="w-5" />
          </OauthBtn>
          <OauthBtn backgroundColor="#1C7BF2">
            <Image src={facebook} alt="oauth" className="w-10" />
          </OauthBtn>
        </div>
      </div>
    </main>
  )
}
