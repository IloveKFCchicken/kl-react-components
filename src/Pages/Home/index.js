import React from 'react';
import {Icon} from 'react-fa'

import { Button } from '../../lib';
import RenderProps from './RenderProps';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Button />
    <Icon spin name="spinner" />,
    <p>111</p>
    <RenderProps />
  </div>
);

export default Home