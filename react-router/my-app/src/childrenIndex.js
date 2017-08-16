import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Children from './components/children';

class App extends Component {
  render(){
    return(
      <div>
        <Children>
          <span style={{color:'red'}}>我是</span>
          <span style={{color:'green'}}> Children</span>
        </Children>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}
