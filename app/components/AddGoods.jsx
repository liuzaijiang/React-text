import React from 'react';

class AddGoods extends React.Component{
	constructor(props){
	super(props);
  }
  
  render(){
	return(
		<button onClick={()=>{this.props.handleAddClick()}}>添加商品</button>
	)
  }
}

export default AddGoods;