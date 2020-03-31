import React from 'react';
import cn from 'classnames';

import './index.less'

interface ButtonProps {
  children: JSX.Element[] | JSX.Element,
  className: string
}

export default (props: ButtonProps) => {
  const { children, className } = props
  return (
    <button className={cn("kl-button app-component", className && className)} {...props}>
      {children}
    </button>
  )
}