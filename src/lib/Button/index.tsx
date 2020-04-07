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
  text: boolean,
  disabled: boolean,
  onClick?: (e: MouseEvent) => {}
}

Button.defaultProps = {
  type: 'default',
  size: 'm',
  ripple: true,
  border: false,
  text: false,
} as Partial<ButtonProps>;

export default function Button({ children, className, type, size, ripple, border, onClick, text, disabled }: ButtonProps) {
  return (
    <button className={cn("kl-component kl-button",
      className && className,
      type && `button--${type}`,
      size && `button-size--${size}`,
      border && 'button--border',
      text && 'button--text',
      disabled && 'button--disabled')}
      onClick={onClick}
      disabled={disabled}>
      <span className='button--children'>{children}</span>
      {!disabled && ripple && <Ripple />}
    </button>
  )
}