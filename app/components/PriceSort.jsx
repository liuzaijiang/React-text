import React from 'react';

class PriceSort extends React.Component{
	constructor(props){
	super(props);
  }
  
  render(){
	return(
		<div>
			<span className="myspan">价格排序</span>
			<select ref="btn" value={this.props.Sort} onChange={(e)=>{this.props.handlePriceSortChange(e)}}>
				<option value="0">低到高</option>
				<option value="1">高到底</option>
			</select>
		</div>
	)
  }
} 

export default PriceSort;