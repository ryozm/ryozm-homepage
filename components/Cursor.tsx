'use client'
import { useRef } from 'react'
import { useEvent, useMount } from 'react-use'

// Inspired by https://codepen.io/ksenia-k/pen/rNoBgbV
const Cursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const ctx = useRef<CanvasRenderingContext2D | null>(null)

  const pointer = useRef<{ x: number; y: number }>({
    x: 0,
    y: 0
  })

  const mouseMoved = useRef<boolean>(false)

  const params = useRef<{
    pointsNumber: number
    widthFactor: number
    spring: number
    friction: number
    color: string
  }>({
    pointsNumber: 10,
    widthFactor: 1.5,
    spring: 0.3,
    friction: 0.3,
    color: 'rgb(240, 240, 104)'
  })

  const trail = useRef<{ x: number; y: number; dx: number; dy: number }[]>([])

  function setupCanvas() {
    canvasRef.current!.width = window.innerWidth
    canvasRef.current!.height = window.innerHeight
  }

  function updateMousePosition(eX: number, eY: number) {
    pointer.current.x = eX
    pointer.current.y = eY
  }

  function update(t: number) {
    if (!ctx.current || !canvasRef.current) {
      window.requestAnimationFrame(update)
      return
    }

    if (!mouseMoved.current) {
      pointer.current.x =
        (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
        window.innerWidth
      pointer.current.y =
        (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
        window.innerHeight
    }

    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )
    trail.current = trail.current.map((p, pIdx) => {
      const prev = pIdx === 0 ? pointer.current : trail.current[pIdx - 1]
      const spring =
        pIdx === 0 ? 0.4 * params.current.spring : params.current.spring
      p.dx += (prev.x - p.x) * spring
      p.dy += (prev.y - p.y) * spring
      p.dx *= params.current.friction
      p.dy *= params.current.friction
      p.x += p.dx
      p.y += p.dy
      return p
    })

    ctx.current.lineCap = 'round'
    ctx.current.beginPath()
    ctx.current.moveTo(trail.current[0].x, trail.current[0].y)

    for (let i = 1; i < trail.current.length - 1; i++) {
      const xc = 0.5 * (trail.current[i].x + trail.current[i + 1].x)
      const yc = 0.5 * (trail.current[i].y + trail.current[i + 1].y)
      ctx.current.quadraticCurveTo(
        trail.current[i].x,
        trail.current[i].y,
        xc,
        yc
      )
      ctx.current.strokeStyle = params.current.color
      ctx.current.lineWidth =
        params.current.widthFactor * (params.current.pointsNumber - i)
      ctx.current.stroke()
    }
    ctx.current.lineTo(
      trail.current[trail.current.length - 1].x,
      trail.current[trail.current.length - 1].y
    )
    ctx.current.stroke()

    window.requestAnimationFrame(update)
  }

  useMount(() => {
    pointer.current = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight
    }
    const _ctx = canvasRef.current?.getContext('2d')
    if (_ctx) {
      ctx.current = _ctx
      const _trail = new Array(params.current.pointsNumber)
      for (let i = 0; i < params.current.pointsNumber; i++) {
        _trail[i] = {
          x: pointer.current.x,
          y: pointer.current.y,
          dx: 0,
          dy: 0
        }
      }
      trail.current = _trail

      setupCanvas()
      update(0)
    }
  })

  useEvent('mousemove', e => {
    mouseMoved.current = true
    updateMousePosition(e.pageX, e.pageY)
  })

  useEvent('touchmove', e => {
    mouseMoved.current = true
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY)
  })

  useEvent('click', e => {
    updateMousePosition(e.pageX, e.pageY)
  })

  useEvent('resize', setupCanvas)

  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Cursor
