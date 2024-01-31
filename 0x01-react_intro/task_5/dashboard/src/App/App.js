import React from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import '../App/App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';


function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password" style={{marginLeft:'15px'}}>Password:</label>
        <input type="password" id="password" />
        <button>Ok</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
