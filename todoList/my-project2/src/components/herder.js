import React,{Component} from 'react';
class Headermodule extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     value:this.props.val
  //   }
  //   //子组件如果要继承父组件的数据，那么只会进一次子组件的constructor
  //   //当父组件的数据发生变化时，就不会再走constructor而是走render
  //   console.log(this.props.val);
  // }

  change = (ev) =>{
    this.props.changeVal(ev.target.value)
    // this.setState({
    //   value:ev.target.value
    // })
  }


  keyup = (ev) =>{
    if(ev.keyCode === 13){
      let json = {
        txt:ev.target.value,
        id: +new Date(),
        checked:false,
        dis:false
      };
      this.props.changeData(json);
    }
  }
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.props.val}
            onChange = {this.change}
            onKeyUp = {this.keyup}
          />
      </header>
    )
  }
}

export default Headermodule;
