// export default function(){
//   return 10
// }
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class DEMO2 extends Component {
  constructor() {
    super();
    this.state = {
      arr:['第二个','demo'],
      num:0
    }
    this.click = this.click.bind(this);
  }
  click(){
    //解构赋值
    let {arr,num} = this.state;
    let arr2 = Object.assign(arr);
    num++;
    arr2.push(num);
    this.setState({
      arr:arr2,
      num
    })
  }
  render(){
    let {arr} = this.state;
    console.log(arr);
    let newList = [];
    newList = arr.map((e,i)=>{
      let data = {
        key:i
      };
      return <li {...data}>{e}</li>
    })
    return(
      <div>
        <button onClick = {this.click}>点击++</button>
        <ul>
          {newList}
        </ul>
      </div>
    )
  }
};
ReactDOM.render(<DEMO2 />,document.getElementById('app'));
