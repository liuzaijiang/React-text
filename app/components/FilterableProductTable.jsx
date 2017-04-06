import React from 'react';
import ModifyModel from './ModifyModel.jsx';
import AddModel from './AddModel.jsx';
import ProductTable from './ProductTable.jsx';
import AddGoods from './AddGoods.jsx';
import PriceSort from './PriceSort.jsx';
import SearchBar from './SearchBar.jsx';
import Paging from './Paging.jsx';

class FilterableProductTable extends React.Component {
  constructor(props){
	super(props);
	this.state={
		filterText:"",
		inStockOnly:false,
		Sort:0,
		products:this.props.products,
		isAdd:false,
		isModify:false,
		modifyKey:null
	};
  }
  
  handleFilterTextChange(e){
	this.setState({
		filterText:e.target.value
	})
  }
  
  handleInStockChange(){
	this.setState((prevState)=>({
		inStockOnly:!prevState.inStockOnly
	}))
  }
  
  handlePriceSortChange(e){
	if(e.target.value==0)
	{
		for(var i=0;i<this.state.products.length;i++)
		{
			for(var j=i;j<this.state.products.length;j++)
			{
				if(this.state.products[i].price>this.state.products[j].price)
				{
					var tmp=this.state.products[i];
					this.state.products[i]=this.state.products[j];
					this.state.products[j]=tmp;
				}
			}
		}
	}
	else{
		for(var i=0;i<this.state.products.length;i++)
		{
			for(var j=i;j<this.state.products.length;j++)
			{
				if(this.state.products[i].price<this.state.products[j].price)
				{
					var tmp=this.state.products[i];
					this.state.products[i]=this.state.products[j];
					this.state.products[j]=tmp;
				}
			}
		}
	
	}
	this.setState({
		Sort:e.target.value,
		products:this.state.products
	})
  }
  
  handleAddClick(){
	this.setState({
		isAdd:true
	})
  }
  
  handleCloseClick(e){
	if(this.state.Sort==0){
		for(var i=0;i<this.state.products.length;i++)
		{
			for(var j=i;j<this.state.products.length;j++)
			{
				if(this.state.products[i].price>this.state.products[j].price)
				{
					var tmp=this.state.products[i];
					this.state.products[i]=this.state.products[j];
					this.state.products[j]=tmp;
				}
			}
		}
	}
	else{
		for(var i=0;i<this.state.products.length;i++)
		{
			for(var j=i;j<this.state.products.length;j++)
			{
				if(this.state.products[i].price<this.state.products[j].price)
				{
					var tmp=this.state.products[i];
					this.state.products[i]=this.state.products[j];
					this.state.products[j]=tmp;
				}
			}
		}
	}
	if(this.state.isAdd)
	{
	this.setState({
		isAdd:false,
		products:this.state.products
	})
	}
	else if(this.state.isModify)
	{
	this.setState({
		isModify:false,
		products:this.state.products
	})
	}
	e.stopPropagation();
  }
  
  handlerDelete(e){
	   var key=e.target.name;
	   let newproducts = this.state.products.filter(product=>{
			return product.name!=key
	   })
	   this.setState({
			products:newproducts
	   })
	}
	
  handlerDetail(e){
		var key=e.target.name;
		this.setState({
			isModify:true,
			modifyKey:key
	})
	}

  
  render() {
	console.log("FilterableProductTable render");
    return (
      <div className="containerDiv">
        <SearchBar 
		 filterText={this.state.filterText}
		 inStockOnly={this.state.inStockOnly}
		 handleFilterTextChange={(e)=>this.handleFilterTextChange(e)}
		 handleInStockChange={()=>this.handleInStockChange()}
		/>
		
		<PriceSort
		 Sort={this.state.Sort}
		 handlePriceSortChange={(e)=>this.handlePriceSortChange(e)}
		/>
		
		<AddGoods
		 handleAddClick={()=>this.handleAddClick()}
		/>
        <ProductTable 
		 products={this.state.products} 
		 filterText={this.state.filterText}
		 Sort={this.state.Sort}
		 inStockOnly={this.state.inStockOnly}
		 handlerDelete={(e)=>this.handlerDelete(e)}
		 handlerDetail={(e)=>this.handlerDetail(e)}
		/>
		<AddModel
		products={this.state.products}
		isAdd={this.state.isAdd}
		handleCloseClick={(e)=>this.handleCloseClick(e)}
		/>
		<ModifyModel
		products={this.state.products}
		isModify={this.state.isModify}
		handleCloseClick={(e)=>this.handleCloseClick(e)}
		modifyKey={this.state.modifyKey}
		/>
		<Paging
		products={this.state.products}
		/>
      </div>
    );
  }
}

export default FilterableProductTable;
