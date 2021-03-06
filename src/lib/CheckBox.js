import React, {Component} from 'react';

export default class CheckBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultState: false
        }
    }

    componentDidMount() {
        const {defaultState} = this.props;
        this.setState({
            defaultState : defaultState || false
        })
    }

    componentDidUpdate() {
        // console.log(this.props)
    }

    render() {
        const {tip} = this.props;
        return (
            <div className="kl-checkbox app-component">
                {tip}
            </div>
        );
    }
}