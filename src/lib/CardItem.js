/**
 * Created by kyx on 2017/10/22.
 */
import React, {Component} from 'react';
import classnames from 'classnames'

// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Redirect,
//     Switch
// } from 'react-router-dom';

class CardItem extends Component {

    componentDidUpdate() {
        // console.log(this.props)
    }

    render() {
        return (
            <div  className={classnames("card-item app-component",this.props.line && "line-card")}>
                <div className="header component-header">
                    card-header
                </div>
                <div className="body">
                    card-body
                </div>
                <div className="footer">
                    card-footer
                </div>
            </div>
        );
    }
}



export default CardItem;
