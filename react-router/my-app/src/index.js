import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import Children from './components/children';
import {BrowserRouter as Router,Route,Link,Redirect,Switch,withRouter} from 'react-router-dom';
import './css/style.css';
import $ from 'jquery';

class App extends Component {
  render(){
    return(
      <div>
        <button><Link to="/back">跳转到back</Link></button>
        <button><Link to="/backT">跳转到backT</Link></button>
      </div>
    )
  }
}

class Back extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    let that = this;
    $.ajax({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?',
      dataType: 'jsonp',
      data: {
        wd:'miaov'
      },
      success:function(data){
        that.setState({
          data:data
        })
      }
    })

  }
  render(){
    let {data} = this.state;
    console.log(data);
    let data2 = null;
    if(data.s){
      data2 = Object.assign(data.s);
      data2=data.s.map((e,i)=><p key={i}>{e}</p>)
    }
    return(
      <div className="back">
        {data2}
      </div>
    )
  }
}

class BackT extends Component {
  render(){
    return(
      <div className="backT">backT</div>
    )
  }
}

ReactDOM.render(
(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component ={App}/>
        <Route path='/back' component ={Back}/>
        <Route path='/color/:id' component ={BackT}/>
      </Switch>
    </div>
  </Router>
), document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}
