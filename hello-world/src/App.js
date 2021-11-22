import logo from './logo.svg';
import './App.css';
import React from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

const App = (props)=>{
  return(
    //修改button標籤中間的內容，注意這裡要使用JSX的{}才能使用js資料
    <button>{props.name}</button>
  );
}

export default App;
