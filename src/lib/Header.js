/**
 * Created by kyx on 2017/11/16.
 */
import React, {Component} from 'react';
import classnames from 'classnames'

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className={classnames("App-header",this.props.className)}>
                {this.props.children}
            </div>
        )
    }
}