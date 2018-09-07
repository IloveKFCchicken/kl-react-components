/**
 * Created by kyx on 2017/10/24.
 */
import React, {Component} from 'react';

// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Redirect,
//     Switch
// } from 'react-router-dom';

class CustomMenu extends Component {

    constructor(props) {
        super(props);
        this.menuStateChange = this.menuStateChange.bind(this);
        this.state = {
            showMenu: false
        }
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        // console.log(this.props)
    }

    menuStateChange() {
        const {showMenu} = this.state;
        this.setState({
            showMenu: !showMenu
        })
    }

    render() {
        const {showMenu} = this.state;
        const {children} = this.props;

        return (
            <span className="custom-menu">
                <div className="custom-menu-btn" onClick={this.menuStateChange}>
                    {showMenu ? "X" : "menu"}
                </div>
                <div className="custom-menu-wrap" style={{display: showMenu ? "block" : "none"}}>
                    <div className="custom-menu-bg"></div>
                    <div className="custom-menu-panel">
                        {children}
                    </div>
                </div>
            </span>
        );
    }
}

{/*<div className="custom-menu-panel">*/}
    {/*{children}*/}

    {/*{*/}
        {/*children ?*/}
            {/*1*/}
            {/*:*/}
            {/*<div className="custom-menu-panel-body">*/}
                {/*<div className="menu-title">*/}
                    {/*自定义菜单*/}
                {/*</div>*/}
                {/*<div className="menu-item">*/}
                    {/*随手记*/}
                {/*</div>*/}
                {/*<div className="menu-item">*/}
                    {/*随手记*/}
                {/*</div>*/}
                {/*<div className="menu-item">*/}
                    {/*随手记*/}
                {/*</div>*/}
                {/*<div className="menu-item">*/}
                    {/*随手记*/}
                {/*</div>*/}
            {/*</div>*/}
    {/*}*/}
{/*</div>*/}

export default CustomMenu;
