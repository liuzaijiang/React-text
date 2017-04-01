import React from 'react';

class SearchBar extends React.Component {
  render() {
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