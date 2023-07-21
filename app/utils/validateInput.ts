import { IInputInfo } from '../components/ui/labelInput'

/**
 * @description 6~20자의 영문, 숫자, 특수문자 '_'만 사용
 * @description 영문으로 시작
 */
function validateID(id: string): IInputInfo | null {
  if (id.trim() === '') {
    return null
  } else if (/^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(id)) {
    return { status: 'success', message: '사용할 수 있는 아이디입니다' }
  }
  return {
    status: 'danger',
    message: '6~20자의 영문, 숫자, 특수문자 "_"만 사용해주세요',
  }
}

/**
 * @description 8~16자의 영문 대소문자, 숫자, 특수문자의 조합
 * @description 특수문자: !@#$%^&*_-
 */
function validatePW(pw: string): IInputInfo | null {
  if (pw.trim() === '') {
    return null
  } else if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_-])[a-zA-Z\d!@#$%^&*_-]{8,16}$/.test(
      pw
    )
  ) {
    return { status: 'success', message: '사용할 수 있는 비밀번호입니다' }
  }
  return {
    status: 'danger',
    message: '8~16자의 영문 대소문자, 숫자, 특수문자의 조합으로 만들어주세요',
  }
}

/**
 * @description 특수문자, 숫자 사용금지
 * @description 처음과 끝 공백 금지
 */
function validateName(name: string): IInputInfo | null {
  if (name.trim() === '') {
    return null
  } else if (
    /^[^\s][^\d!"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]+[^\s]$/.test(name)
  ) {
    return { status: 'success', message: '사용할 수 있는 이름입니다' }
  }
  return {
    status: 'danger',
    message: '이름에는 특수문자, 숫자를 사용할 수 없습니다',
  }
}

/**
 * @description 이메일 형식 사용
 */
function validateEmail(email: string): IInputInfo | null {
  if (email.trim() === '') {
    return null
  } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return { status: 'success', message: '사용할 수 있는 이메일입니다' }
  }
  return {
    status: 'danger',
    message: '잘못된 이메일 형식 입니다',
  }
}

/**
 * @description 10~11자의 숫자만 사용
 */
function validatePhone(phone: string): IInputInfo | null {
  if (phone.trim() === '') {
    return null
  } else if (/^\d{10,11}$/.test(phone)) {
    return { status: 'success', message: '사용할 수 있는 전화번호입니다' }
  }
  return {
    status: 'danger',
    message: '잘못된 전화번호 입니다',
  }
}

/**
 * @param pw1 반환값을 사용할 필드
 * @param pw2 pw1과 비교할 문자열
 * @description check password
 */
function validatePW2(pw1: string, pw2: string): IInputInfo | null {
  if (pw1.trim() === '') {
    return null
  } else if (pw1 !== pw2) {
    return {
      status: 'danger',
      message: '비밀번호가 서로 일치하지 않습니다',
    }
  }
  return { status: 'success', message: '비밀번호가 일치합니다' }
}

export const validateInput = {
  id: validateID,
  pw: validatePW,
  name: validateName,
  email: validateEmail,
  phone: validatePhone,
  pw2: validatePW2,
}
