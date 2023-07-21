'use client'

import { ChangeEvent, useState } from 'react'
import LabelInput from '@/components/ui/labelInput'
import { validateInput } from '@/utils/validateInput'

export default function SignUp() {
  // Form field state
  const [id, setID] = useState('')
  const [pw, setPW] = useState('')
  const [checkPw, setCheckPW] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Terms checkbox state
  const [checks, setChecks] = useState<boolean[]>(
    new Array(terms.length).fill(false)
  )
  const [allCheck, setAllCheck] = useState(false)

  const checkHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const checked = e.target.checked
    const tmpChecks = [...checks]
    tmpChecks[index] = checked
    setChecks(tmpChecks)
    if (!checked) setAllCheck(false)
  }

  const allCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked
    setAllCheck(checked)
    if (checked) {
      setChecks(new Array(terms.length).fill(true))
    } else {
      setChecks(new Array(terms.length).fill(false))
    }
  }

  return (
    <main className="flex justify-center w-full p-8">
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="mb-5 text-lg font-semibold">회원가입</h1>
        <h2 className="w-full pl-1 mt-3 mb-3 text-base font-semibold text-left">
          로그인 정보
        </h2>
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
        <h2 className="w-full pl-1 mt-3 mb-3 text-base font-semibold text-left">
          회원 정보
        </h2>
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
        <h2 className="w-full pl-1 mt-3 mb-3 text-base font-semibold text-left">
          약관
        </h2>
        <section className="w-full p-4 border rounded-md">
          <label className="flex justify-start w-full gap-2 text-base font-medium">
            <input
              className="w-5"
              type="checkbox"
              checked={allCheck}
              onChange={allCheckHandler}
            />
            전체 동의
          </label>
          <div className="mt-4 mb-4 border-b"></div>
          <div className="flex flex-col gap-3">
            {terms.map((e, i) => {
              return (
                <label
                  key={i}
                  className="flex justify-start w-full gap-2 text-sm"
                >
                  <input
                    className="w-4"
                    type="checkbox"
                    checked={checks[i]}
                    onChange={(e) => checkHandler(e, i)}
                  />
                  {e.required ? '[필수]' : '[선택]'} {e.title}
                </label>
              )
            })}
          </div>
        </section>
        <button className="w-full h-12 mt-8 text-white bg-blue-600 rounded-md hover:bg-blue-500">
          가입완료
        </button>
      </div>
    </main>
  )
}

const terms = [
  { title: '만 14세 이상입니다', required: true },
  { title: '개인회원 약관에 동의', required: true },
  { title: '개인정보 수집 및 이용 동의', required: true },
  { title: '개인정보 제3자 제공 동의', required: true },
  { title: '전자금융거래 이용약관 동의', required: true },
  { title: '마케팅 목적의 개인정보 수집 및 이용 동의', required: false },
  { title: '광고성 정보 수신 동의 - 이메일', required: false },
  { title: '광고성 정보 수신 동의 - SNS, SMS', required: false },
]
