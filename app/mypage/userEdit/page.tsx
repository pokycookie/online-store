'use client'

import LabelInput from '@/components/ui/labelInput'
import { validateInput } from '@/utils/validateInput'
import { useState } from 'react'

export default function UserEditPage() {
  const [email, setEmail] = useState('')
  const [pw, setPW] = useState('')
  const [newPW, setNewPW] = useState('')
  const [checkPW, setCheckPW] = useState('')
  const [phone, setPhone] = useState('')

  const [emailEdit, setEmailEdit] = useState(false)
  const [nameEdit, setNameEdit] = useState(false)
  const [phoneEdit, setPhoneEdit] = useState(false)

  return (
    <div>
      <table className="w-full p-2 border rounded-sm">
        <tbody className="divide-y">
          <tr>
            <th className={th}>이메일</th>
            <td className={td}>
              <div className="flex items-center justify-between w-full gap-3">
                <p className="ml-2 font-semibold">0cookieboy0@gmail.com</p>
                <button
                  onClick={() => setEmailEdit((prev) => !prev)}
                  className="p-2 pl-3 pr-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 whitespace-nowrap"
                >
                  {emailEdit ? '이메일 변경 취소' : '이메일 변경'}
                </button>
              </div>
              {emailEdit ? (
                <div className="flex flex-col w-full gap-3 mt-3">
                  <LabelInput
                    lable="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-500 whitespace-nowrap">
                    인증메일 전송
                  </button>
                </div>
              ) : null}
            </td>
          </tr>
          <tr>
            <th className={th}>이름</th>
            <td className={td}>
              <div className="flex items-center justify-between w-full">
                <p className="ml-2 font-semibold">황세웅</p>
                <button className="p-2 pl-3 pr-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 whitespace-nowrap">
                  이름 변경
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className={th}>휴대폰 번호</th>
            <td className={td}>
              <div className="flex items-center justify-between w-full">
                <p className="ml-2 font-semibold">010 XXXX XXXX</p>
                <button
                  onClick={() => setPhoneEdit((prev) => !prev)}
                  className="p-2 pl-3 pr-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 whitespace-nowrap"
                >
                  {phoneEdit ? '휴대폰 번호 변경 취소' : '휴대폰 번호 변경'}
                </button>
              </div>
              {phoneEdit ? (
                <div className="flex flex-col w-full gap-3 mt-3">
                  <LabelInput
                    type="text"
                    lable="휴대폰"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    info={validateInput.phone(phone)}
                  />
                  <button className="w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-500 whitespace-nowrap">
                    인증번호 전송
                  </button>
                </div>
              ) : null}
            </td>
          </tr>
          <tr>
            <th className={th}>비밀번호 변경</th>
            <td className={td}>
              <div className="flex flex-col w-full gap-3">
                <LabelInput
                  type="password"
                  lable="현재 비밀번호"
                  value={pw}
                  onChange={(e) => setPW(e.target.value)}
                  info={validateInput.pw(pw)}
                />
                <LabelInput
                  type="password"
                  lable="새 비밀번호"
                  value={newPW}
                  onChange={(e) => setNewPW(e.target.value)}
                  info={validateInput.pw(newPW)}
                />
                <LabelInput
                  type="password"
                  lable="새 비밀번호 확인"
                  value={checkPW}
                  onChange={(e) => setCheckPW(e.target.value)}
                  info={validateInput.pw2(checkPW, newPW)}
                />
                <button className="w-full h-12 text-white bg-blue-600 rounded-md hover:bg-blue-500">
                  비밀번호 변경하기
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th className={th}>수신설정</th>
            <td className={td}>
              <label className="flex items-start gap-2 pt-1 pb-1">
                <input type="checkbox" className="accent-blue-600" />
                <p className="text-gray-500">
                  마케팅 및 이벤트 목적의 개인정보 수집 및 이용 동의함
                </p>
              </label>
              <label className="flex items-start gap-2 pt-1 pb-1">
                <input type="checkbox" className="accent-blue-600" />
                <p className="text-gray-500">광고성 정보 수신 동의함</p>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const th =
  'w-0 p-4 pr-12 text-xs font-semibold text-left bg-gray-100 whitespace-nowrap'
const td = 'p-3 text-xs'
