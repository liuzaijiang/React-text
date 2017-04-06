import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable.jsx';

var products = [
  {category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: 29.99, stocked: true, name: 'Basketball'},
  {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
  {category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'},
  {category: 'Electronics', price: 399.99, stocked: false, name: 'iPhone 5'}
];
 

ReactDOM.render(
  <FilterableProductTable products={products}/>,
  document.getElementById('app')
);