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

      for (const entry of entries) {
        if (entry.isIntersecting) {
          viewportREF.current.add(entry.target)
        } else {
          viewportREF.current.delete(entry.target)
        }
      }

      for (const target of targets) {
        if (!target.current) continue
        if (viewportREF.current.has(target.current)) {
          callback(target.current)
          break
        }
      }

      //   const visibles: IntersectionObserverEntry[] = []
      //   entries.forEach((entry) => {
      //     if (entry.isIntersecting) visibles.push(entry)
      //   })

      //   console.log(visibles.map((e) => e.target))
      //   loop: for (const target of targets) {
      //     if (!target.current) continue
      //     for (const element of visibles) {
      //       if (element.target.id === target.current.id) {
      //         callback(element, observer)
      //         break loop
      //       }
      //     }
      //   }
    },
    [callback]
  )

  useEffect(() => {
    viewportREF.current = new Set()

    const observer = new IntersectionObserver(onIntersect, options)
    for (const ref of targets) {
      if (ref?.current) observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [onIntersect, options, targets])

  useEffect(() => {
    console.log('useTOC ON')
  }, [])
}
