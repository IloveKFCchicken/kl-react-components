import React from 'react';
import { Button, Page } from '../../lib';

import './index.less'

export default function ComponentPage(props) {
  return (
    <Page>
      <h1>Component</h1>
      <div>
        <h2>Button</h2>
        <div className='row'>
          <h3>Button--type</h3>
          <Button onClick={() => console.log('click')}>myBotton</Button>
          <Button type='primary'>myBotton</Button>
          <Button type='success'>myBotton</Button>
          <Button type='info'>myBotton</Button>
          <Button type='warn'>myBotton</Button>
          <Button type='error'>myBotton</Button>
        </div>
        <div className='row'>
          <h3>Button--type disabled</h3>
          <Button onClick={() => console.log('click')} disabled>myBotton</Button>
          <Button onClick={() => console.log('click')} type='primary' disabled>myBotton</Button>
          <Button type='success' disabled>myBotton</Button>
          <Button type='info' disabled>myBotton</Button>
          <Button type='warn' disabled>myBotton</Button>
          <Button type='error' disabled>myBotton</Button>
        </div>
        <div className='row'>
          <h3>Button--border</h3>
          <Button border>myBotton</Button>
          <Button type='primary' border>myBotton</Button>
          <Button type='success' border>myBotton</Button>
          <Button type='info' border>myBotton</Button>
          <Button type='warn' border>myBotton</Button>
          <Button type='error' border>myBotton</Button>
        </div>
        <div className='row'>
          <h3>Button--border diabled</h3>
          <Button onClick={() => console.log('click')} border disabled>myBotton</Button>
          <Button onClick={() => console.log('click')} type='primary' border disabled>myBotton</Button>
          <Button type='success' border disabled>myBotton</Button>
          <Button type='info' border disabled>myBotton</Button>
          <Button type='warn' border disabled>myBotton</Button>
          <Button type='error' border disabled>myBotton</Button>
        </div>
        <div className='row'>
          <h3>Button--size</h3>
          <Button size='s'>myBotton</Button>
          <Button>myBotton</Button>
          <Button size='l'>myBotton</Button>
        </div>
        <div className='row'>
          <h3>Button--text</h3>
          <Button text>myBotton</Button>
          <Button type='primary' text>myBotton</Button>
          <Button type='success' text>myBotton</Button>
          <Button type='info' text>myBotton</Button>
          <Button type='warn' text>myBotton</Button>
          <Button type='error' text>myBotton</Button>
        </div>
        <div className='row'>
          <h3>Button--text disabled</h3>
          <Button text disabled>myBotton</Button>
          <Button type='primary' text disabled>myBotton</Button>
          <Button type='success' text disabled>myBotton</Button>
          <Button type='info' text disabled>myBotton</Button>
          <Button type='warn' text disabled>myBotton</Button>
          <Button type='error' text disabled>myBotton</Button>
        </div>
      </div>
    </Page>
  )
};
