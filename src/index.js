import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import App from './01_内联样式的CSS/App';
// import App from './02普通的CSS写法/App'
// import App from './03_CSS_Modules/App'
// import App from './04_Less编写方式/App'
// import App from './05_CSS_in_JS/App'
import App from './06_ClassName_lib/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{color: "purple", size:"50px"}}>
    <App />
  </ThemeProvider>
);


// ES6: 标签模板字符串
// const name = "why"
// const age = 18

// 1.模板字符串的基本使用
// const str = `my name is ${name}, age is ${age}`
// console.log(str)

// 2.标签模板字符串的使用
// function foo(...args) {
//   console.log(args)
// }

// // foo("why", 18, 1.88)
// foo`my name is ${name}, age is ${age}`