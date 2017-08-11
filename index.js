import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Ul from './comm/Ul.js';
// import Inputs from './comm/inputs.js';
// import Todo from './comm/Todo.js';
import ChToPa from './comm/ChToPa.js';


// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
/*
index.js->入口文件，用于渲染(ReactDOM.render(组件名，容器))
组件传递：
  从父组件传递给子组件数据的方式是通过：this.props来接收
  1.单向数据类：
    a. 父组件的数据是单向流向子级的，父级的数据只能父级修改，不允许子级修改
    b. 父组件传递给子组件用属性传递，子组件用props接收
  2.当前目录./   上级目录../
    组件分类：
    注：组件分类必须放在src里(可以新建其余文件夹，但必须放在src目录下)
      1.import React,{Component} from 'react';
          组件代码
      2.导出组件：export default 组件名
      3.如果要用到组件，需要在头部先引入组件
        例：import 组件名 from './comm/组件名'
  3.react改变this指向的方法：
      一、在react-app环境下：
              事件名 = () =>{//此时的this指向组件
                代码块
              }
      二、在非react-app环境下：
          事件名 = this.事件名.bind(this)
  4.react中的表单：
      受限与非受限
        受限：**只要是表单元素**加了默认值就为受限组件，默认值是根据状态来修改的，只要状态不改那么里边的值就不会变
      非受限：在受限元素身上加入defaultValue,此组件就变成了非受限组件
  5.this.setState的回调函数：
      this.state = {foo: 2};
                              //回调函数
      this.setState({foo: 123}, ()=> {
          console.log(foo);
          // 123
      });
  注；子组件传递信息给父组件通过回调函数传递：
      例：this.props.change(this.props.id)
  6.子组件如果要把父组件的东西变成自己的:
    1. //父级的props传进来
      可在constructor(props){
        //在super里面接收props，变成自己的
        super(props)

    }
    注：子组件如果要继承父组件的数据，那么只会进一次子组件的constructor
        当父组件的数据发生变化时，就不会再走constructor而是走render
  7.PropTypes:是react提供的数据验证，专门用来验证props的数据类型
  8.ref:方便在当前组件下快速获取某个组件或者元素。
      读：console.log(this.head)  || console.log(this.refs.head)
      写：<header ref = {{(elem)=>{this.head = elem}}}></header>
    注：不能跨组件，只能在当前组件
*/

ReactDOM.render(<ChToPa />, document.getElementById('root'));
// ReactDOM.render(<Todo />, document.getElementById('root'));
// ReactDOM.render(<Inputs />, document.getElementById('root'));
// registerServiceWorker();

//热替换，自动更新页面
if(module.hot){
  module.hot.accept();
}
