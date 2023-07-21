'use client'

import { useState } from 'react'
import LabelInput from '@/components/ui/labelInput'
import { validateInput } from '@/utils/validateInput'

export default function SignUp() {
  const [id, setID] = useState('')
  const [pw, setPW] = useState('')
  const [checkPw, setCheckPW] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <main className="flex justify-center w-full p-8">
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="mb-5 text-lg font-semibold">회원가입</h1>
        <LabelInput
          type="text"
          lable="아이디"
          value={id}
          onChange={(e) => setID(e.target.value)}
          info={validateInput.id(id)}
        />
        <LabelInput
          type="password"
          lable="비밀번호"
          value={pw}
          onChange={(e) => setPW(e.target.value)}
          info={validateInput.pw(pw)}
        />
        <LabelInput
          type="password"
          lable="비밀번호 확인"
          value={checkPw}
          onChange={(e) => setCheckPW(e.target.value)}
          info={validateInput.pw2(checkPw, pw)}
        />
        <LabelInput
          type="text"
          lable="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          info={validateInput.name(name)}
        />
        <LabelInput
          type="text"
          lable="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          info={validateInput.email(email)}
        />
        <LabelInput
          type="text"
          lable="휴대폰"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          info={validateInput.phone(phone)}
        />
        <button className="w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-500">
          가입완료
        </button>
      </div>
    </main>
  )
}
