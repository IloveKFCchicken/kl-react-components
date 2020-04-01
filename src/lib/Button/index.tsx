import React from 'react';
import cn from 'classnames';

import './index.less'

interface ButtonProps {
  children: JSX.Element[] | JSX.Element,
  className: string,
  type: 'default' | 'primary' | 'error' | 'warn' | 'success',
  size: 's' | 'm' | 'l',
  ripple: boolean,
  onClick: Function
}

Button.defaultProps = {
  type: 'default',
  size: 'm',
  ripple: true
} as Partial<ButtonProps>;

export default function Button(props: ButtonProps) {
  const { children, className, type, size, ripple } = props
  return (
    <button className={cn("kl-component kl-button", className && className, type && `button--${type}`, size && `button-size--${size}`)}>
      <span className='button--children'>{children}</span>
      {ripple && <span className='button--ripple'></span>}
    </button>
  )
}

