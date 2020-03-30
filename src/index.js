import React,{render} from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/app'

// ReactDOM.render(<App />, document.getElementById('root'));

// function App(params) {
//   return (
//     <div>11</div>
//   )
// }

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('root')
);