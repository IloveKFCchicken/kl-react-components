/**
 * Created by kyx on 2018/3/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {SimpleCarousel} from './index';
const App = ()=>{
    return (
        <div>
            <SimpleCarousel>
                {
                    [1,2,3,4,5,6].map((item,i)=><div key={i}>{i+1}</div>)
                }
            </SimpleCarousel>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
