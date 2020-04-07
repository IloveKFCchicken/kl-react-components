import React, { useState } from 'react'
import cn from 'classnames'

import { getClickPosition } from '../../utils/utils'

import './index.less'

export default function Ripple() {
  const [show, setShow] = useState(false)
  const [style, setStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })
  let timeRef: any = undefined

  function click(e: any) {
    e.stopPropagation()

    clearTimeout(timeRef)
    const { left, top, standard } = getClickPosition(e)
    setStyle({
      left,
      top,
      width: standard,
      height: standard
    })
    setShow(true)
  }

  function recover() {
    setShow(false)
    timeRef = setTimeout(() => {
      setStyle({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      })
    }, 250)
  }

  return (
    <span className='kl-ripple'>
      <span className='kl-ripple--cover' onMouseDown={click} onMouseUp={recover}></span>
      <span className={cn('kl-ripple--root', show && 'kl-ripple--show')} style={style}></span>
    </span>
  )
}
