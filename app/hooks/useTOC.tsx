import { RefObject, useCallback, useEffect, useRef } from 'react'

export default function useTOC(
  targets: RefObject<HTMLElement>[],
  callback?: (traget: HTMLElement) => void,
  options?: IntersectionObserverInit
) {
  const viewportREF = useRef<Set<Element>>(new Set())

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (!callback) return

      // viewport내에 있는 element를 관리
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // 새로 들어온 element를 viewport set에 추가
          viewportREF.current.add(entry.target)
        } else {
          // 빠져나간 element를 viewport set에서 제거
          viewportREF.current.delete(entry.target)
        }
      }

      // viewport내에 있는 element 중 targets 순으로 가장 먼저인 element를 반환
      for (const target of targets) {
        if (!target.current) continue
        if (viewportREF.current.has(target.current)) {
          callback(target.current)
          break
        }
      }
    },
    [callback, targets]
  )

  useEffect(() => {
    viewportREF.current = new Set()

    const observer = new IntersectionObserver(onIntersect, options)
    for (const ref of targets) {
      if (ref?.current) observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [onIntersect, options, targets])
}
