import React from 'react';
import ProductRow from './ProductRow.jsx';
import ProductCategoryRow from './ProductCategoryRow.jsx';

class ProductTable extends React.Component {
  constructor(props){
		super(props);
  }


  render() {
	console.log("ProductTable render");
    let rows = [];
    let lastCategory = null;
	let length=this.props.products.length;
	let hasGoods=0;
	let tmp=hasGoods;
	let categoryArray=[];
	let noRepeatCategoryArray=[];
    let obj={};
	let arrayLength=categoryArray.length;
	let sameCategory=false;
	let last=null;
	
    this.props.products.forEach((product,i) => {
	  const name=product.name.toLowerCase() 
	  const filterText=this.props.filterText.toLowerCase();
	  
	 
	  if(filterText!=="")
	  {
	  
		if (name.substring(0,1)!=filterText.substring(0,1) || (!product.stocked && this.props.inStockOnly)) {
				tmp=hasGoods;
				hasGoods=0;
				hasGoods|=tmp;
				if( i == length-1 && 0==hasGoods )
				{
					rows.splice(0,length-1,<ProductRow product={0} key={`noGoods`} hasGoods={0} />);
				}
				return;
		}
		else{
				tmp=hasGoods;
				hasGoods=1;
				hasGoods|=tmp;
		}
	  }
	  else if((!product.stocked && this.props.inStockOnly)){
				return;
	  }

	  var arrayLength=categoryArray.length
	  for(var num = 0; num < arrayLength; num++){
         if(!obj[categoryArray[num]]){
             noRepeatCategoryArray.push(categoryArray[num]);
             obj[categoryArray[num]] = 1;
               }
       }
	 
	
	  while(arrayLength--)
	  {
		if(product.category==noRepeatCategoryArray[arrayLength])
			sameCategory=true;
	  }

	  
	  if(product.category!==last&&!sameCategory)
	  {
        //rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      //rows.push(<ProductRow product={product} key={+new Date() + i} />);
	  rows.push(<ProductRow product={product} 
		index={i} 
		currentPage={this.props.currentPage}
		eachPage={this.props.eachPage}
		key={product.name} 
		Sort={this.props.Sort}
		handlerDetail={(e)=>{this.props.handlerDetail(e)}} 
		handlerDelete={(e)=>this.props.handlerDelete(e)}
	   />);
	  
	  last=product.category
	  categoryArray.push(product.category);
	  sameCategory=false;
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="td">Name</th>
            <th className="td">Price</th>
			<th className="td">Category</th>
			<th className="td">Operation</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;