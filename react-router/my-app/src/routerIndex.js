import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import Children from './components/children';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './css/style.css';

class App extends Component {
  render(){
    return(
      <div>
        首页
      </div>
    )
  }
}

class News extends Component {
  render(){
    return(
      <div>
        新闻
      </div>
    )
  }
}

class Sport extends Component {
  render(){
    return(
      <div>
        体育
      </div>
    )
  }
}

class Amus extends Component {
  render(){
    return(
      <div>
        娱乐
        <Link to="/amus/aaa" >跳到aaa</Link>
      </div>
    )
  }
}

let arr = [
  {name:'app',component:<App />},
  {name:'news',component:<News />},
  {name:'sport',component:<Sport />},
  {name:'amus',component:<Amus />}
];
let routers = (obj)=>{
  let {match} = obj;
  let f = arr.find(e=>{
    if(e.name === match.params.id){
      return e;
    }
  })
  if(!f){
    return <App />
  }else{
    return f.component;
  }
}
ReactDOM.render(
(
  <Router>
    <div>
      <button><Link to="/app">首页</Link></button>
      <button><Link to="/news">新闻</Link></button>
      <button><Link to="/sport">体育</Link></button>
      <button><Link to="/amus">娱乐</Link></button>
      <Route exact path="/:id" component={routers}/>
      <Route  path="/amus/aaa" component={Amus} />
    </div>
  </Router>
), document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}
