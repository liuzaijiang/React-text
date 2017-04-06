import React from 'react';

class ProductRow extends React.Component {
	constructor(props){
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
	  if (this.props.hasGoods !== nextProps.hasGoods) {
		return true;
		}
	if (this.props.product !== nextProps.product) {
		return true;
		}
	  return false;
	}
	
    render() {
	console.log("ProductRow render");
	if(this.props.hasGoods==0)
	{
		return <tr><th className="td" colSpan="4" >No Goods</th></tr>
	}
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
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