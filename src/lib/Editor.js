/**
 * Created by kyx on 2018/3/19.
 */
import React from 'react';
import classNames from 'classnames';

export default class Editor extends React.Component {
    render(){
        const {className} = this.props;
        return (
            <div className={classNames('editor-wrap',className && className)}>
                <div className="editor-nav">

                </div>
                <div className="editor-content">

                </div>
            </div>
        )
    }
}