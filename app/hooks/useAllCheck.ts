import { useState } from 'react'

export default function useAllCheck(size: number) {
  const [allCheck, setAllCheck] = useState(false)
  const [checks, setChecks] = useState<Set<number>>(new Set())

  const checkHandler = (index: number, checked: boolean) => {
    setChecks((prev) => {
      const tmp = new Set(prev)
      if (checked) tmp.add(index)
      else tmp.delete(index)
      return tmp
    })
    setAllCheck(false)
  }

  const allCheckHandler = (checked: boolean) => {
    setAllCheck(checked)
    if (checked) {
      setChecks(
        new Set(
          Array(size)
            .fill(0)
            .map((_, i) => i)
        )
      )
    } else {
      setChecks(new Set())
    }
  }

  return { allCheck, allCheckHandler, checks, checkHandler }
}
