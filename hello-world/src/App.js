import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';

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
/*
const App = (props)=>{
  return(
    //修改button標籤中間的內容，注意這裡要使用JSX的{}才能使用js資料
    //<button onClick={props.handleClick}>{props.name}</button>
    <button> {props.children}</button>
  );
  }*/

class App extends Component{

/*請注意render()只是渲染前最後一個階段，元件還沒有真的渲染到DOM上。
所以不要在render()中操作有關return元素的DOM。*/


  constructor(props){//加入建構子以及props參數
    //在js中，透過super()就能取得所繼承的類別中的變數結構。
    super(props);
    //this.name="舊的名字";
    //this.changeName=this.changeName.bind(this);
    this.state={//宣告state物件內包含一個變數percent
      percent:"30%"
    }
  }

  changeName = (newName)=>{
    this.name=newName;
    console.log("hey");
  }

  render(){
    return (
      /*<button onClick={ this.changeName }>
        {this.name}
      </button>*/
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
            <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
        </div>
        </div>
    );
  }

}
export default App;
