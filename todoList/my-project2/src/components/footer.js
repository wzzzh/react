import React,{Component} from 'react';
class Footer extends Component {
  //footer部分的切换
  tabClick = (ev)=>{
    this.props.tabClick(ev.target.innerText);
    let ul = document.getElementsByClassName('filters')[0];
    let as = ul.getElementsByTagName('a');
    for(let i=0;i<as.length;i++){
      as[i].className = ''
    }
    ev.target.className = 'selected'
  }
//清除完成项
 clearClick = (ev)=>{
   this.props.clearClick(ev.target.innerText)
 }

  render(){
    let {num} = this.props;
    let {arr} = this.props;
    let dClass = null;
    if(arr.length){
      dClass = 'footer';
    }else{
      dClass = 'hidden';
    }
    let fClass = '';
    return(
      <div>
        <footer
          className={dClass}
         >
          <span className="todo-count">
            <strong>{num}</strong>
            <span>条未选中</span>
          </span>
          <ul className="filters">
            <li>
              <a href="#/all"
               className='selected'
               onClick = {this.tabClick}
               >全部
             </a>
            </li>
            <li>
              <a href="#/active"
              onClick = {this.tabClick}
              >未完成
              </a>
            </li>
            <li>
              <a href="#/completed"
              onClick = {this.tabClick}
              >已完成
              </a>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick = {this.clearClick}
            >清除完成项
          </button>
        </footer>
      </div>
    )
  }
};
export  default Footer;
