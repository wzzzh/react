import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import Children from './components/children';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import './css/style.css';


/*
  整体思路：
    点击受限组件的时候，会进protected里的render ={}.
    在这个函数里判断是否为登录状态(bl是否为true)
    是真：protected
    是假:login

    login组件中有一个状态默认为false
    login的render中会判断这个状态是否为真
    如果为真，那么就进protected，否则进登录结构

    在点击登录的时候500毫秒之后调用父组件的changeBl方法，
    然后在改变自己的状态，当这个状态发生变化时，那么进当前组件的render

*/
class App extends Component {
  constructor(){
    super();
    this.state = {
      bl:false
    }
  }

  changeBl =()=>{
    this.setState({
      bl:true
    })
  }

  signout =()=>{
    this.setState({
      bl:false
    })
  }
  render(){
    let {bl} = this.state;
    let sta = null;
    if(bl){
      sta = <h3>Welcome,<button onClick = {this.signout}><Link to="/">登出</Link></button></h3>
    }else{
      sta=<h3>您没有登录</h3>
    }
    return(
      <div>
        {sta}
        <ul>
          <li><Link to="/public">公共页面</Link></li>
          <li><Link to="/protected">受保护页面</Link></li>
          <Route path="/public" component={Public}/>
          <Route path="/protected" render ={()=>{
            if(bl){
              return <Protected />
            }else{
              return <Redirect to="/login" />
            }
          }}/>
          <Route path="/login" render = {(porps)=>{
            return <Login changeBl ={this.changeBl}/>
          }}/>
        </ul>
      </div>
    )
  }
}

class Public extends Component {
  render(){
    return(
      <div>
        我是公共页面
      </div>
    )
  }
}

class Protected extends Component {
  render(){
    return(
      <div>
        我是受保护页面
      </div>
    )
  }
}

class Login extends Component {
  constructor(){
    super();
    this.state= {
      b:false
    }
  }

  click = ()=>{
    let {changeBl} = this.props;
    setTimeout(()=>{
      changeBl();
      this.setState({
        b:true
      })
    },300)
  }
  render(){
    if(this.state.b){
      return <Redirect to="/protected"/>
    }
      return(
        <div>
          <p>你必须登录，才可以访问受限组件</p>
          <button onClick = {this.click}>登录</button>
        </div>
      )
    }
}


ReactDOM.render(
(
  <Router>
    <div>
      <Route path='/' component ={App}/>
    </div>
  </Router>
), document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}
