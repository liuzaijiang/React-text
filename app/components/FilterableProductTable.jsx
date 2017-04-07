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
		modifyKey:null,
		currentPage:0,
		eachPage:4
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
	   this.state.products = this.state.products.filter(product=>{
			return product.name!=key
	   })
	   
		if(this.state.products.length/this.state.eachPage==parseInt(this.state.products.length/this.state.eachPage))
			{
				var page=parseInt(this.state.products.length/this.state.eachPage);
			}
		else
			{
				var page=Math.ceil(this.state.products.length/this.state.eachPage);
			}
		
		if(this.state.currentPage==page&&this.state.products.length!=0&&this.state.products.length%this.state.eachPage==0)
		{
		this.setState({
			products:this.state.products,
			currentPage:this.state.currentPage-1
		})
		}
		else{
		this.setState({
			products:this.state.products,
		})
		}
	}
	
  handlerDetail(e){
		var key=e.target.name;
		this.setState({
			isModify:true,
			modifyKey:key
	})
	}
	
  handleGotoPage(e){
	this.setState({
		currentPage:parseInt(e.target.value)
	})
  }
  
  handleClickPage(e){
	if(e.target.id=="firstPage"&&e.target.className!="ban")
	{
		var page=0;
		this.setState({
		currentPage:page
	})
	}
	else if(e.target.id=="prePage"&&e.target.className!="ban"){
		var page=this.state.currentPage-1;
		this.setState({
		currentPage:page
	})
	}
	else if(e.target.id=="nextPage"&&e.target.className!="ban"){
		var page=this.state.currentPage+1;
		this.setState({
		currentPage:page
	})
	}
	else if(e.target.id=="lastPage"&&e.target.className!="ban"){
		if(this.state.products.length/this.state.eachPage==parseInt(this.state.products.length/this.state.eachPage))
			{
				var page=parseInt(this.state.products.length/this.state.eachPage);
			}
		else
			{
				var page=Math.ceil(this.state.products.length/this.state.eachPage);
			}
		this.setState({
		currentPage:page-1
	})
	}
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
		 currentPage={this.state.currentPage}
		 eachPage={this.state.eachPage}
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
		isAdd={this.state.isAdd}
		products={this.state.products}
		currentPage={this.state.currentPage}
		eachPage={this.state.eachPage}
		handleGotoPage={(e)=>{this.handleGotoPage(e)}}
		handleClickPage={(e)=>{this.handleClickPage(e)}}
		/>
      </div>
    );
  }
}

export default FilterableProductTable;
