import React from 'react';
import cn from 'classnames';

import Ripple from '../Ripple';

import './index.less'

interface ButtonProps {
  children: JSX.Element[] | JSX.Element,
  className: string,
  type: 'default' | 'primary' | 'error' | 'warn' | 'success' | 'info',
  size: 's' | 'm' | 'l',
  ripple: boolean,
  border: boolean,
  onClick: Function
}

Button.defaultProps = {
  type: 'default',
  size: 'm',
  ripple: true,
  border: false,
} as Partial<ButtonProps>;

export default function Button(props: ButtonProps) {
  const { children, className, type, size, ripple, border } = props
  return (
    <button className={cn("kl-component kl-button",
      className && className,
      type && `button--${type}`,
      size && `button-size--${size}`,
      border && `button--border`)
    }>
      <span className='button--children'>{children}</span>
      {ripple && <Ripple />}
    </button>
  )
}