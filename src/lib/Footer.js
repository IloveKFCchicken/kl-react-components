/**
 * Created by kyx on 2017/11/16.
 */
import React, { Component } from 'react';
import classnames from 'classnames'

export default class Footer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={classnames("page", this.props.className)}>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}