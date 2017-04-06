import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    console.log("ProductCategoryRow render");
    return <tr><th className="td" colSpan="2">{this.props.category}</th></tr>;
  }
}

export default ProductCategoryRow;