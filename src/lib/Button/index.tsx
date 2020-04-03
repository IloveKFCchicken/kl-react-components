import React, { MouseEvent } from 'react';
import cn from 'classnames';

import Ripple from '../Ripple';

import './index.less'

interface ButtonProps {
  children: React.ReactNode,
  className: string,
  type: 'default' | 'primary' | 'error' | 'warn' | 'success' | 'info',
  size: 's' | 'm' | 'l',
  ripple: boolean,
  border: boolean,
  onClick?: (e: MouseEvent) => {}
}

Button.defaultProps = {
  type: 'default',
  size: 'm',
  ripple: true,
  border: false,
} as Partial<ButtonProps>;

export default function Button({ children, className, type, size, ripple, border, onClick }: ButtonProps) {
  return (
    <button className={cn("kl-component kl-button",
      className && className,
      type && `button--${type}`,
      size && `button-size--${size}`,
      border && `button--border`)
    } onClick={onClick}>
      <span className='button--children'>{children}</span>
      {ripple && <Ripple />}
    </button>
  )
}