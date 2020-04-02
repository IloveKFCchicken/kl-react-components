import React, { useState } from 'react'
import cn from 'classnames'

import './index.less'

export default function Ripple() {
  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  // console.log(style)
  function click(e: any) {
    e.stopPropagation()

    const { pageX, pageY, target } = e
    const rect = target.getBoundingClientRect()
    const left = pageX - (rect.left + window.scrollX)
    const top = pageY - (rect.top + window.scrollY)
    const standard = Math.max(rect.width, rect.height)
    setStyle({
      left,
      top,
      width: standard,
      height: standard
    })
    setShow(true)

    // setTimeout(() => {
    //   setShow(false)
    //   setStyle({
    //     left: 0,
    //     top: 0,
    //     width: 0,
    //     height: 0,
    //   })
    // }, 200)
  }

  function recover() {
    setShow(false)
    setTimeout(() => {
      setStyle({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      })
    }, 200)
  }

  return (
    <span className='kl-ripple' onMouseDown={click} onMouseUp={recover}>
      <span className={cn('kl-ripple--root', show && 'kl-ripple--show')} style={style}></span>
    </span>
  )
}
