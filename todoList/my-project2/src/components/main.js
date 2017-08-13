import React,{Component} from 'react';
class Limodule extends Component {
  constructor(){
    super();
    this.state = {
      db:false
    }
  }
  changeChecked =(ev)=>{
    this.props.PchangeChecked(this.props.id)
  }

  del = () =>{
    this.props.Pdel(this.props.id)
  }

  dblclick = ()=>{
    this.setState({
      db:true
    },()=>{
      this.db.focus();
    })
  }

  //失焦事件
  blur = () =>{
    let {id,checked} = this.props;
    let newData = {
      id:id,
      checked:checked,
      txt:this.db.value
    }
  this.props.changeTxt(newData);
  this.setState({
    db:false
  })
}
//鼠标按下包括回车和esc
  keyup =(ev)=>{
    if(ev.keyCode === 13){
      let {id,checked} = this.props;
      let newData = {
        id:id,
        checked:checked,
        txt:this.db.value,
        dis:false
      }
      this.props.changeTxt(newData);
      this.setState({
        db:false
      })
    }
    if(ev.keyCode ===27){
      this.db.value = '';
      this.setState({
        db:false
      })
    }
  }


  render(){
    let {txt,checked,dis} = this.props;
    let sClass = checked?'completed':'';
    if(this.state.db){
      sClass += ' editing'
    }
    if(dis){
        sClass += ' hidden'
    }
    return (
      <li className={sClass}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked = {checked}
                onChange = {this.changeChecked}
              />
              <label
                onDoubleClick = {this.dblclick}
              >{txt}
              </label>
              <button
                className="destroy"
                onClick = {this.del}
                ></button>
          </div>
          <input
            ref = {(elem) => {this.db = elem}}
            className = "edit"
            onBlur = {this.blur}
            onKeyUp = {this.keyup}
          />
      </li>
    )
  }
}

export default Limodule;
