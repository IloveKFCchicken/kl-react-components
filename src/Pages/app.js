import React from 'react';
import {
  Route,
  Switch,
  useLocation,
  useParams,
  Link
} from "react-router-dom";


import About from './About'
import Detail from './Detail'
import Home from './Home'
import Component from './Component'

import './App.less'

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname)
  }, [location]);
}


function App() {
  usePageViews();
  return (
    <div className="App-container">
      <div className='aside'>
        <Link to='/'>Home</Link>
        <Link to='/blog/100'>Blog</Link>
        <Link to='/detail'>detail</Link>
        <Link to='/about'>about</Link>
        <Link to='/components'>components</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail" component={Detail} />
        <Route path="/components" component={Component} />
        <Route path="/blog/:slug">
          <BlogPost />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
