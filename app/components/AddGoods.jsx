import React from 'react';

class AddGoods extends React.Component{
	constructor(props){
	super(props);
  }
  
	shouldComponentUpdate(nextProps, nextState) {
		return false
	}
	
	render(){
	console.log("AddGoods render");
	return(
		<button onClick={()=>{this.props.handleAddClick()}}>添加商品</button>
	)
  }
}

export default AddGoods;