import { useEffect, useRef } from 'react'

export function useCursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const frameId = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      const { mx, my } = pos.current
      let { rx, ry } = pos.current
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      pos.current.rx = rx
      pos.current.ry = ry
      if (curRef.current) {
        curRef.current.style.left = mx + 'px'
        curRef.current.style.top  = my + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      frameId.current = requestAnimationFrame(animate)
    }
    frameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameId.current)
    }
  }, [])

  const hoverOn  = () => { curRef.current?.classList.add('hov'); ringRef.current?.classList.add('hov') }
  const hoverOff = () => { curRef.current?.classList.remove('hov'); ringRef.current?.classList.remove('hov') }

  return { curRef, ringRef, hoverOn, hoverOff }
}
