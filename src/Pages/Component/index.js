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
          <Button>myBotton</Button>
          <Button type='primary'>myBotton</Button>
          <Button type='success'>myBotton</Button>
          <Button type='info'>myBotton</Button>
          <Button type='warn'>myBotton</Button>
          <Button type='error'>myBotton</Button>
        </div>
        <div className='row'>
          <Button border>myBotton</Button>
          <Button type='primary' border>myBotton</Button>
          <Button type='success' border>myBotton</Button>
          <Button type='info' border>myBotton</Button>
          <Button type='warn' border>myBotton</Button>
          <Button type='error' border>myBotton</Button>
        </div>
        <div className='row'>
          <Button size='s'>myBotton</Button>
          <Button>myBotton</Button>
          <Button size='l'>myBotton</Button>
        </div>
      </div>
    </Page>
  )
};
