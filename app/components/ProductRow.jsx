import React from 'react';

class ProductRow extends React.Component {
	constructor(props){
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
	  if (this.props.hasGoods !== nextProps.hasGoods) {
		return true;
		}
	  if (this.props.currentPage !== nextProps.currentPage) {
		return true;
		}
	  if (this.props.Sort !== nextProps.Sort) {
		return true;
		}
	  if (this.props.index !== nextProps.index) {
		return true;
		}
	  return false;
	}
	
    render() {
	console.log("ProductRow render");
	let display="";
	if(this.props.hasGoods==0)
	{
		return <tr><th className="td" colSpan="4" >No Goods</th></tr>
	}
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
	
		//if(this.props.index<this.props.pageStart||this.props.index>this.props.pageStop){
		if(this.props.index<this.props.currentPage*this.props.eachPage||this.props.index>(this.props.currentPage+1)*this.props.eachPage-1){
			display="none";
		}
    return (
      <tr style={{display:display}}>
        <td className="td">{name}</td>
        <td className="td">{`$${this.props.product.price}`}</td>
		<td className="td">{this.props.product.category}</td>
		<td className="td">
			<a className="itemBtn" onClick={(e)=>{this.props.handlerDelete(e)}} name={this.props.product.name}>删除</a>
			<a className="itemBtn" onClick={(e)=>{this.props.handlerDetail(e)}} name={this.props.product.name}>详情</a>
		</td>
      </tr>
    );
  }
}

export default ProductRow;