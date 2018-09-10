/**
 * Created by kyx on 2018/3/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import {SimpleCarousel} from './index';
import Home from './Pages/Home';
import About from './Pages/About';

const Topics = ({ match }) => {
    console.log(match)
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.url}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    )
};
const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);


const App = ()=>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/component">Home</Link>
                    </li>
                    <li>
                        <Link to="/component/about">About</Link>
                    </li>
                    <li>
                        <Link to="/component/topics">Topics</Link>
                    </li>
                </ul>
                <Route exact path="/component" component={Home} />
                <Route path="/component/about" component={About} />
                <Route path="/component/topics" component={Topics} />
            </div>
        </Router>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
