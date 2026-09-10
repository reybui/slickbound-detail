import { useEffect, useRef, useState } from 'react'

/**
 * Port of the .dc.html scroll behaviour:
 *  - `.sb-rev` elements fade/slide in when ~92% into the viewport
 *  - the stats band counts up from 0 once it scrolls into view
 *  - everything force-settles after 8s as a fallback
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const inView = (n: Element) => {
      const r = n.getBoundingClientRect()
      const h = window.innerHeight || 800
      return r.top < h * 0.92 && r.bottom > 0
    }
    const tick = () => {
      document.querySelectorAll('.sb-rev').forEach((n) => {
        if (inView(n)) n.classList.add('in')
      })
    }
    tick()
    window.addEventListener('scroll', tick, true)
    window.addEventListener('resize', tick)
    const iv = window.setInterval(tick, 400)
    const to = window.setTimeout(() => {
      document.querySelectorAll('.sb-rev').forEach((n) => n.classList.add('in'))
      window.clearInterval(iv)
    }, 8000)
    return () => {
      window.removeEventListener('scroll', tick, true)
      window.removeEventListener('resize', tick)
      window.clearInterval(iv)
      window.clearTimeout(to)
    }
  }, [])
}

export function useCountUp(target: number, durationMs = 1500) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const start = () => {
      if (started.current) return
      started.current = true
      const t0 = performance.now()
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / durationMs)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(target * eased))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start()
      },
      { threshold: 0.2 },
    )
    io.observe(node)
    const fallback = window.setTimeout(start, 8000)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [target, durationMs])

  return { value, ref }
}
