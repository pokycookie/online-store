import { useCallback, useEffect, useRef } from 'react'

interface IntersectionCallback {
  (entry: IntersectionObserverEntry, observer: IntersectionObserver): void
}

export default function useIntersectionObserver(
  callback?: IntersectionCallback,
  options?: IntersectionObserverInit
) {
  const ref = useRef<HTMLElement>(null)

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && callback) callback(entry, observer)
      })
    },
    [callback]
  )

  useEffect(() => {
    if (!callback) return
    if (!ref.current) return
    const observer = new IntersectionObserver(onIntersect, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [callback, onIntersect, options, ref])

  return ref
}
