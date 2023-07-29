'use client'

import LabelInput from '@/components/ui/labelInput'
import { validateInput } from '@/utils/validateInput'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

export default function FindUser() {
  const [type, setType] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setID] = useState('')
  const [certCode, setCertCode] = useState('')
  const [certSended, setCertSended] = useState(false)

  useEffect(() => {
    setCertCode('')
    setCertSended(false)
  }, [type])

  return (
    <main className="flex justify-center w-full p-8">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="flex justify-between w-full h-12 mb-10 overflow-hidden border rounded-md">
          <TypeButton
            selected={type === 0}
            className="w-1/2 h-full text-base rounded-md"
            onClick={() => setType(0)}
          >
            아이디 찾기
          </TypeButton>
          <TypeButton
            selected={type === 1}
            className="w-1/2 h-full text-base rounded-md"
            onClick={() => setType(1)}
          >
            비밀번호 찾기
          </TypeButton>
        </div>
        <div className="flex flex-col w-full gap-3 mb-3">
          <LabelInput
            type="text"
            lable="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LabelInput
            type="text"
            lable="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            info={validateInput.email(email)}
          />
          {type === 1 ? (
            <LabelInput
              type="text"
              lable="아이디"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          ) : null}
        </div>
        <CertSendButton
          sended={certSended}
          onClick={() => setCertSended(true)}
          className="w-full h-12 mb-10 text-white rounded-md"
        >
          {certSended ? '인증코드 재발송' : '인증코드 발송'}
        </CertSendButton>
        {certSended ? (
          <>
            <div className="flex flex-col w-full gap-3 mb-3">
              <LabelInput
                type="text"
                lable="인증코드"
                value={certCode}
                onChange={(e) => setCertCode(e.target.value)}
              />
            </div>
            <button
              onClick={() => setCertSended(true)}
              className="w-full h-12 mb-10 text-white bg-blue-600 rounded-md hover:bg-blue-500"
            >
              인증확인
            </button>
          </>
        ) : null}
      </div>
    </main>
  )
}

const TypeButton = styled.button<{ selected: boolean }>((props) => ({
  backgroundColor: props.selected ? '#2563eb' : 'transparent',
  color: props.selected ? 'white' : '#9ca3af',
  fontWeight: props.selected ? 600 : 400,
}))

const CertSendButton = styled.button<{ sended: boolean }>((props) => ({
  backgroundColor: props.sended ? '#d1d5db' : '#2563eb',
  ':hover': {
    backgroundColor: props.sended ? '#9ca3af' : '#3b82f6',
  },
}))
