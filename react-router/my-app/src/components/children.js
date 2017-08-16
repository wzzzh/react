import React,{Component} from 'react';
class Children extends Component{
  render(){
  let defaultChilden = [
    <span>hi,</span>,
    <span> default</span>
  ]
  let child = null;
  if(this.props.children){
    child = React.Children.map(this.props.children,(child)=>{
      return child;
    })
  }else{
    child = React.Children.map(defaultChilden,(child)=>{
      return child;
    })
  }

    return (
        <li>
          <a>{child}</a>
        </li>
    )
  }
}

export default Children;
