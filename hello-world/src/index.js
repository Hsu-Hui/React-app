import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const styleArgument = { fontSize:'100px',color: 'red' };
const showone = false;
const testFunction = () => {
  return (
    <div>
      <button>大家好</button>
      <h1>我很好</h1>
    </div>
  );
}

const multiButton = () =>{
  var output = [];
  for (let i=0; i<4; i++)
    output.push(<button>我是第{i}個按鈕</button>)
  return output;
}

const Progress = () =>{
  const barWidth = "50%";
  return(
  <div>
    <div className="progtrss-back" style={{backgroundColor:"rgba(0,0,0,0.2)",
  width:"200px",height:"7px",borderRadius:"10px"}}>
    <div className="progress-bar" style={{backgroundColor:"#fe5196",
    width:barWidth,height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>);
}


ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  //<h1 style = {{ fontSize: '100px', color: 'red' }} > Hello, world! </h1>,
  //<h1 style = { styleArgument }>{ (showone==true)? 1 : 0 }</h1>,
  //testFunction(),

  /*在元素上傳遞屬性時若省略要指定的值，該資料會獲得true布林值
  <button value={true} > 是 </button>,
  <button value > 是 </button>*/

  /*JSX改用駝峰法，也就是從onclick變成了onClick
  <button value={true}  onClick={ }>是</button>*/

  /*
  1.直接寫函式名稱，但去除括弧，函式只會接收到一個event類別的參數，並不能傳遞其他參數，
  如果我們要取得元素的value，就必須要透過原生DOM的event.target.value
  <button value={true}  onClick={ myFunction }>是</button>
  2.箭頭函式，傳什麼參數、使用幾個函式、做什麼運算都可以，
  缺點是很容易讓版面看起來很亂，而且因為是在render創造一個新函式，
  每次渲染時都會創造一次，會影響效能，所以一般能用1的話就會用1的方法。
  <button value="true"  onClick={(e)=>{ myFunction1();myFunction2()} }>是</button>*/

  <div>
    <App name="我的名字"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
