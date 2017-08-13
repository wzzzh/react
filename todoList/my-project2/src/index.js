import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Headermodule from './components/herder';
import Limodule from './components/main';
import Footer from './components/footer.js';

class Todolist extends Component {
  constructor(){
    super();
    this.state = {
      val:'',
      // arr:[
      //   {txt:'对不',checked:false,id:1,dis:false},
      //   {txt:'对',checked:false,id:2,dis:false},
      // ]
      arr:[]
    }
  }

  //改变受限组件输入框的值
  changeVal =(newVal)=>{
    this.setState({
      val:newVal
    })
  }

  //通过Li子组件传给父级的id,改变check的状态
  PchangeChecked = (id) =>{
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2.forEach((e)=>{
      if(e.id === id){
        e.checked = !e.checked;
      }
    })
    this.setState({
      arr:arr2
    })
  }

  //在header子组件里，回车通过header子组件传递的数据在父组件里添加数据
  changeData = (newData) =>{
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2.unshift(newData);
    this.setState({
      arr:arr2,
      val:''
    })
  }

  //通过id删除数据
  Pdel = (id) =>{
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2 = arr.filter(e=>{
      //筛选出不是此id的数据
      return e.id !== id
    })
    this.setState({
      arr:arr2
    })
  }

  //全选
  allchange = (ev)=>{
    let {checked} = ev.target;
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2.forEach(e =>e.checked = checked);
    this.setState({
      arr:arr2
    })
  }

  //通过传回来的数据替换数据
  changeTxt = (newData)=>{
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    arr2.forEach((e,i)=>{
      if(e.id === newData.id && newData.txt){
        arr2.splice(i,1,newData)
      }
    })

    this.setState({
      arr:arr2
    })
  }

  //footer筛选
  tabClick =(target) =>{
    let {arr} = this.state;
    let arr2 = Object.assign(arr);
    console.log(arr);
    if(target === '未完成'){
      arr2.forEach(e=>{
        if(e.checked){
          e.dis=true;
        }else{
          e.dis=false;
        }
      })
    }else if(target ==='已完成'){
      arr2.forEach(e=>{
        if(!e.checked){
          e.dis=true;
        }else{
          e.dis=false;
        }
      })
    }else{
      arr2.forEach(e=>{
        e.dis=false;
      })
    }
    this.setState({
      arr:arr2
    })
  }

 clearClick = (target)=>{
   let {arr} = this.state;
   let arr2 = Object.assign(arr);
   if(target === '清除完成项'){
     arr2 =arr.filter((e)=>{
       return e.checked === false;
     });

     this.setState({
       arr:arr2
     })
   }
 }

  render(){
    //初始化全选按钮
    let all = false;
    //给header子组件传递数据
    let data = {
      changeVal:this.changeVal,
      val:this.state.val,
      changeData:this.changeData
    }

    //li子组件传递数据
    let {arr} = this.state;
    let list = null;
    list = arr.map((e,i)=>{
      let data2 = {
        txt:e.txt,
        id:e.id,
        checked:e.checked,
        dis:e.dis,
        key:i,
        PchangeChecked:this.PchangeChecked,
        Pdel:this.Pdel,
        changeTxt:this.changeTxt,
        newChange:this.newChange
      }
    all=arr.length?arr.every(e=>e.checked):false;

    return  <Limodule {...data2}/>
    })
    let num = 0;
    arr.forEach((e)=>{
      if(!e.checked){
        num++
      }
    })

    let disClass = null;
    if(arr.length){
      disClass = 'toggle-all';
    }else{
      disClass = 'hidden';
    }
    return (
      <div>
        <Headermodule {...data}/>
        <section className="main">
            <input
              className={disClass}
              type="checkbox"
              checked={all}
              onChange = {this.allchange}
            />
            <ul className="todo-list">
              {list}
            </ul>
        </section>
          <Footer
            tabClick={this.tabClick}
            clearClick = {this.clearClick}
            num = {num}
            arr = {arr}
          />
      </div>
    )
  }
}


ReactDOM.render(<Todolist />, document.getElementById('app'));
if (module.hot) {
  module.hot.accept();
}
