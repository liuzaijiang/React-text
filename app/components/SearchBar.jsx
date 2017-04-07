import React from 'react';

class SearchBar extends React.Component {
	
	
  shouldComponentUpdate(nextProps, nextState) {
	  if (this.props.filterText !== nextProps.filterText) {
		return true;
		}
	if (this.props.inStockOnly !== nextProps.inStockOnly) {
		return true;
		}
	  return false;
	}
	
  render() {
	console.log("SearchBar render");
    return (
	<div>
      <form>
        <input 
		type="text" 
		placeholder="Search..." 
		value={this.props.filterText} 
		onChange={(e)=>this.props.handleFilterTextChange(e)}
		/>
        <p>
          <input 
		  type="checkbox" 
		  checked={this.props.inStockOnly} 
		  onChange={()=>this.props.handleInStockChange()}
		  />
          {' '}
          Only show products in stock
        </p>
      </form>
	</div>
    );
  }
}

export default SearchBar;