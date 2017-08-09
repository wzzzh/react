// import fn from './ppa.js';
// console.log(fn());;
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class DEMO1 extends Component {
  constructor() {
    super();
    this.state={
      arr:[]
    }
    this.click = this.click.bind(this);
  }
  click(){
    let arr2 = ['这','是','es6-react','第一个','组件','练习']
    this.setState({
      arr:arr2
    });
  }
  render(){
    //解构赋值
    let {arr} = this.state;
    let list = [];
    list = arr.map(function(e,i){
      let data = {
        key:i
      }
      return <li {...data}>{e}</li>
    });
    return(
      <div>
        <button onClick = {this.click}>点击渲染页面</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<DEMO1/>,document.getElementById('app'));
