webpackJsonp([0],{78:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(6),u=n(i),c=r(81),f=n(c),d=r(80),p=n(d),h=r(86),y=n(h),m=r(79),b=n(m),g=r(83),v=n(g),E=r(87),P=n(E),k=r(82),_=n(k),O=function(e){function t(e){a(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={filterText:"",inStockOnly:!1,Sort:0,products:r.props.products,isAdd:!1,isModify:!1,modifyKey:null,currentPage:0,eachPage:4},r}return l(t,e),s(t,[{key:"handleFilterTextChange",value:function(e){this.setState({filterText:e.target.value})}},{key:"handleInStockChange",value:function(){this.setState(function(e){return{inStockOnly:!e.inStockOnly}})}},{key:"handlePriceSortChange",value:function(e){if(0==e.target.value){for(var t=0;t<this.state.products.length;t++)for(var r=t;r<this.state.products.length;r++)if(this.state.products[t].price>this.state.products[r].price){var n=this.state.products[t];this.state.products[t]=this.state.products[r],this.state.products[r]=n}}else for(var t=0;t<this.state.products.length;t++)for(var r=t;r<this.state.products.length;r++)if(this.state.products[t].price<this.state.products[r].price){var n=this.state.products[t];this.state.products[t]=this.state.products[r],this.state.products[r]=n}this.setState({Sort:e.target.value,products:this.state.products})}},{key:"handleAddClick",value:function(){this.setState({isAdd:!0})}},{key:"handleCloseClick",value:function(e){if(0==this.state.Sort){for(var t=0;t<this.state.products.length;t++)for(var r=t;r<this.state.products.length;r++)if(this.state.products[t].price>this.state.products[r].price){var n=this.state.products[t];this.state.products[t]=this.state.products[r],this.state.products[r]=n}}else for(var t=0;t<this.state.products.length;t++)for(var r=t;r<this.state.products.length;r++)if(this.state.products[t].price<this.state.products[r].price){var n=this.state.products[t];this.state.products[t]=this.state.products[r],this.state.products[r]=n}this.state.isAdd?this.setState({isAdd:!1,products:this.state.products}):this.state.isModify&&this.setState({isModify:!1,products:this.state.products}),e.stopPropagation()}},{key:"handlerDelete",value:function(e){var t=e.target.name;if(this.state.products=this.state.products.filter(function(e){return e.name!=t}),this.state.products.length/this.state.eachPage==parseInt(this.state.products.length/this.state.eachPage))var r=parseInt(this.state.products.length/this.state.eachPage);else var r=Math.ceil(this.state.products.length/this.state.eachPage);this.state.currentPage==r&&0!=this.state.products.length&&this.state.products.length%this.state.eachPage==0?this.setState({products:this.state.products,currentPage:this.state.currentPage-1}):this.setState({products:this.state.products})}},{key:"handlerDetail",value:function(e){var t=e.target.name;this.setState({isModify:!0,modifyKey:t})}},{key:"handleGotoPage",value:function(e){this.setState({currentPage:parseInt(e.target.value)})}},{key:"handleClickPage",value:function(e){if("firstPage"==e.target.id&&"ban"!=e.target.className){var t=0;this.setState({currentPage:t})}else if("prePage"==e.target.id&&"ban"!=e.target.className){var t=this.state.currentPage-1;this.setState({currentPage:t})}else if("nextPage"==e.target.id&&"ban"!=e.target.className){var t=this.state.currentPage+1;this.setState({currentPage:t})}else if("lastPage"==e.target.id&&"ban"!=e.target.className){if(this.state.products.length/this.state.eachPage==parseInt(this.state.products.length/this.state.eachPage))var t=parseInt(this.state.products.length/this.state.eachPage);else var t=Math.ceil(this.state.products.length/this.state.eachPage);this.setState({currentPage:t-1})}}},{key:"render",value:function(){var e=this;return console.log("FilterableProductTable render"),u.default.createElement("div",{className:"containerDiv"},u.default.createElement(P.default,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,handleFilterTextChange:function(t){return e.handleFilterTextChange(t)},handleInStockChange:function(){return e.handleInStockChange()}}),u.default.createElement(v.default,{Sort:this.state.Sort,handlePriceSortChange:function(t){return e.handlePriceSortChange(t)}}),u.default.createElement(b.default,{handleAddClick:function(){return e.handleAddClick()}}),u.default.createElement(y.default,{products:this.state.products,filterText:this.state.filterText,Sort:this.state.Sort,inStockOnly:this.state.inStockOnly,currentPage:this.state.currentPage,eachPage:this.state.eachPage,handlerDelete:function(t){return e.handlerDelete(t)},handlerDetail:function(t){return e.handlerDetail(t)}}),u.default.createElement(p.default,{products:this.state.products,isAdd:this.state.isAdd,handleCloseClick:function(t){return e.handleCloseClick(t)}}),u.default.createElement(f.default,{products:this.state.products,isModify:this.state.isModify,handleCloseClick:function(t){return e.handleCloseClick(t)},modifyKey:this.state.modifyKey}),u.default.createElement(_.default,{isAdd:this.state.isAdd,products:this.state.products,currentPage:this.state.currentPage,eachPage:this.state.eachPage,handleGotoPage:function(t){e.handleGotoPage(t)},handleClickPage:function(t){e.handleClickPage(t)}}))}}]),t}(u.default.Component);t.default=O},79:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){var e=this;return console.log("AddGoods render"),i.default.createElement("button",{onClick:function(){e.props.handleAddClick()}},"添加商品")}}]),t}(i.default.Component);t.default=u},80:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={price:""},r}return o(t,e),l(t,[{key:"handleSubmitClick",value:function(e){var t={};t.category=this.refs.addCategory.value,t.name=this.refs.addName.value,t.price=this.refs.addPrice.value,t.stocked=this.refs.addStock.checked,this.props.products.push(t),this.props.handleCloseClick(e),e.stopPropagation()}},{key:"keyUp",value:function(e){new RegExp(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/).test(e.target.value)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.isAdd!==e.isAdd}},{key:"render",value:function(){var e=this;return console.log("AddModel render"),this.props.isAdd?i.default.createElement("div",{className:"overLay"},i.default.createElement("h4",{style:{textAlign:"center"}},"商品新增"),i.default.createElement("hr",null),i.default.createElement("form",{ref:"addForm",className:"addForm"},i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddName",style:{display:"block"}},"种类"),i.default.createElement("input",{ref:"addCategory",id:"staffAddName",type:"text",placeholder:"Category"})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddAge",style:{display:"block"}},"名称"),i.default.createElement("input",{ref:"addName",id:"staffAddAge",type:"text",placeholder:"Name"})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddPrice",style:{display:"block"}},"价格($)"),i.default.createElement("input",{ref:"addPrice",id:"staffAddPrice",type:"text"})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddPrice",style:{display:"block"}},"是否有库存"),i.default.createElement("input",{ref:"addStock",id:"staffAddPrice",type:"checkbox"})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddDescrip",style:{display:"block"}},"商品描述"),i.default.createElement("textarea",{ref:"addDescrip",id:"staffAddDescrip",type:"text"})),i.default.createElement("p",{ref:"tips",className:"tips"},"提交成功"),i.default.createElement("p",{ref:"tipsUnDone",className:"tips"},"请录入完整的人员信息"),i.default.createElement("p",{ref:"tipsUnAge",className:"tips"},"请录入正确的年龄"),i.default.createElement("div",null,i.default.createElement("button",{type:"button",onClick:function(t){e.handleSubmitClick(t)}},"提交"),i.default.createElement("button",{type:"button",onClick:function(t){e.props.handleCloseClick(t)}},"关闭"),i.default.createElement("button",{type:"reset"},"重置")))):null}}]),t}(i.default.Component);t.default=u},81:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.isModify!==e.isModify}},{key:"handleSubmitClick",value:function(e){var t=this,r={};r.category=this.refs.modifyCategory.value,r.name=this.refs.modifyName.value,r.price=this.refs.modifyPrice.value,r.stocked=this.refs.modifyStock.checked;var n=null;this.props.products.filter(function(e,r){if(e.name==t.props.modifyKey)return void(n=r)}),this.props.products.splice(n,1,r),this.props.handleCloseClick(e),e.stopPropagation()}},{key:"handleResetClick",value:function(){this.refs.modifyCategory.value=this.refs.modifyCategory.defaultValue,this.refs.modifyName.value=this.refs.modifyName.defaultValue,this.refs.modifyPrice.value=this.refs.modifyPrice.defaultValue,this.refs.modifyStock.checked=this.refs.modifyStock.defaultChecked}},{key:"render",value:function(){var e=this;if(console.log("ModifyModel render"),!this.props.isModify)return null;var t=this.props.products.filter(function(t){return t.name==e.props.modifyKey});return i.default.createElement("div",{className:"overLay"},i.default.createElement("h4",{style:{textAlign:"center"}},"商品修改"),i.default.createElement("hr",null),i.default.createElement("form",{ref:"modifyForm",className:"addForm"},i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAdName",style:{display:"block"}},"种类"),i.default.createElement("input",{ref:"modifyCategory",id:"modifyCategory",type:"text",defaultValue:t[0].category})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddAge",style:{display:"block"}},"名称"),i.default.createElement("input",{ref:"modifyName",id:"modifyName",type:"text",defaultValue:t[0].name})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddPrice",style:{display:"block"}},"价格($)"),i.default.createElement("input",{ref:"modifyPrice",id:"modifyPrice",type:"text",defaultValue:t[0].price})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddPrice",style:{display:"block"}},"是否有库存"),i.default.createElement("input",{ref:"modifyStock",id:"modifyStock",type:"checkbox",defaultChecked:t[0].stocked})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"staffAddDescrip",style:{display:"block"}},"商品描述"),i.default.createElement("textarea",{ref:"modifyDescrip",id:"modifyDescrip",type:"text"})),i.default.createElement("p",{ref:"tips",className:"tips"},"提交成功"),i.default.createElement("p",{ref:"tipsUnDone",className:"tips"},"请录入完整的人员信息"),i.default.createElement("p",{ref:"tipsUnAge",className:"tips"},"请录入正确的年龄"),i.default.createElement("div",null,i.default.createElement("button",{type:"button",onClick:function(t){e.handleSubmitClick(t)}},"提交"),i.default.createElement("button",{type:"button",onClick:function(t){e.props.handleCloseClick(t)}},"关闭"),i.default.createElement("button",{type:"button",onClick:function(t){e.handleResetClick(t)}},"重置"))))}}]),t}(i.default.Component);t.default=u},82:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.products!==e.products||(this.props.currentPage!==e.currentPage||1==this.props.isAdd)}},{key:"render",value:function(){var e=this;if(console.log("Paging render"),this.props.products.length/this.props.eachPage==parseInt(this.props.products.length/this.props.eachPage))var t=parseInt(this.props.products.length/this.props.eachPage);else var t=Math.ceil(this.props.products.length/this.props.eachPage);for(var r=[],n="",a="",o="",l="",s=1;s<=t;s++)r.push(i.default.createElement("option",{value:s-1},s));return this.props.currentPage<1&&(n="ban",a="ban"),this.props.currentPage+1>=t&&(o="ban",l="ban"),i.default.createElement("div",{id:"barcon",className:"barcon"},i.default.createElement("div",{id:"barcon2",className:"barcon2"},i.default.createElement("ul",{onClick:function(t){return e.props.handleClickPage(t)}},i.default.createElement("li",null,i.default.createElement("a",{href:"###",id:"firstPage",className:n},"首页")),i.default.createElement("li",null,i.default.createElement("a",{href:"###",id:"prePage",className:a},"上一页")),i.default.createElement("li",null,i.default.createElement("a",{href:"###",id:"nextPage",className:o},"下一页")),i.default.createElement("li",null,i.default.createElement("a",{href:"###",id:"lastPage",className:l},"尾页")),i.default.createElement("li",null,i.default.createElement("label",null,"跳转"),i.default.createElement("select",{onChange:function(t){return e.props.handleGotoPage(t)},value:this.props.currentPage},r)))))}}]),t}(i.default.Component);t.default=u},83:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.Sort!==e.Sort}},{key:"render",value:function(){var e=this;return console.log("PriceSort render"),i.default.createElement("div",null,i.default.createElement("span",{className:"myspan"},"价格排序"),i.default.createElement("select",{ref:"btn",value:this.props.Sort,onChange:function(t){e.props.handlePriceSortChange(t)}},i.default.createElement("option",{value:"0"},"低到高"),i.default.createElement("option",{value:"1"},"高到底")))}}]),t}(i.default.Component);t.default=u},84:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return console.log("ProductCategoryRow render"),i.default.createElement("tr",null,i.default.createElement("th",{className:"td",colSpan:"2"},this.props.category))}}]),t}(i.default.Component);t.default=u},85:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.hasGoods!==e.hasGoods||(this.props.product!==e.product||(this.props.currentPage!==e.currentPage||(this.props.Sort!==e.Sort||this.props.index!==e.index)))}},{key:"render",value:function(){var e=this;console.log("ProductRow render");var t="";if(0==this.props.hasGoods)return i.default.createElement("tr",null,i.default.createElement("th",{className:"td",colSpan:"4"},"No Goods"));var r=this.props.product.stocked?this.props.product.name:i.default.createElement("span",{style:{color:"red"}},this.props.product.name);return(this.props.index<this.props.currentPage*this.props.eachPage||this.props.index>(this.props.currentPage+1)*this.props.eachPage-1)&&(t="none"),i.default.createElement("tr",{style:{display:t}},i.default.createElement("td",{className:"td"},r),i.default.createElement("td",{className:"td"},"$"+this.props.product.price),i.default.createElement("td",{className:"td"},this.props.product.category),i.default.createElement("td",{className:"td"},i.default.createElement("a",{className:"itemBtn",onClick:function(t){e.props.handlerDelete(t)},name:this.props.product.name},"删除"),i.default.createElement("a",{className:"itemBtn",onClick:function(t){e.props.handlerDetail(t)},name:this.props.product.name},"详情")))}}]),t}(i.default.Component);t.default=u},86:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(6),u=n(i),c=r(85),f=n(c),d=r(84),p=(n(d),function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),s(t,[{key:"render",value:function(){var e=this;console.log("ProductTable render");var t=[],r=this.props.products.length,n=0,a=n,o=[],l=[],s={},i=(o.length,!1),c=null;return this.props.products.forEach(function(d,p){var h=d.name.toLowerCase(),y=e.props.filterText.toLowerCase();if(""!==y){if(h.substring(0,1)!=y.substring(0,1)||!d.stocked&&e.props.inStockOnly)return a=n,n=0,n|=a,void(p==r-1&&0==n&&t.splice(0,r-1,u.default.createElement(f.default,{product:0,key:"noGoods",hasGoods:0})));a=n,n=1,n|=a}else if(!d.stocked&&e.props.inStockOnly)return;for(var m=o.length,b=0;b<m;b++)s[o[b]]||(l.push(o[b]),s[o[b]]=1);for(;m--;)d.category==l[m]&&(i=!0);d.category,t.push(u.default.createElement(f.default,{product:d,index:p,currentPage:e.props.currentPage,eachPage:e.props.eachPage,key:d.name,Sort:e.props.Sort,handlerDetail:function(t){e.props.handlerDetail(t)},handlerDelete:function(t){return e.props.handlerDelete(t)}})),c=d.category,o.push(d.category),i=!1}),u.default.createElement("table",{className:"table"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",{className:"td"},"Name"),u.default.createElement("th",{className:"td"},"Price"),u.default.createElement("th",{className:"td"},"Category"),u.default.createElement("th",{className:"td"},"Operation"))),u.default.createElement("tbody",null,t))}}]),t}(u.default.Component));t.default=p},87:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.filterText!==e.filterText||this.props.inStockOnly!==e.inStockOnly}},{key:"render",value:function(){var e=this;return console.log("SearchBar render"),i.default.createElement("div",null,i.default.createElement("form",null,i.default.createElement("input",{type:"text",placeholder:"Search...",value:this.props.filterText,onChange:function(t){return e.props.handleFilterTextChange(t)}}),i.default.createElement("p",null,i.default.createElement("input",{type:"checkbox",checked:this.props.inStockOnly,onChange:function(){return e.props.handleInStockChange()}})," ","Only show products in stock")))}}]),t}(i.default.Component);t.default=u},88:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(6),o=n(a),l=r(29),s=n(l),i=r(78),u=n(i),c=[{category:"Sporting Goods",price:9.99,stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:29.99,stocked:!0,name:"Basketball"},{category:"Sporting Goods",price:49.99,stocked:!0,name:"Football"},{category:"Electronics",price:99.99,stocked:!0,name:"iPod Touch"},{category:"Electronics",price:199.99,stocked:!0,name:"Nexus 7"},{category:"Electronics",price:399.99,stocked:!1,name:"iPhone 5"}];s.default.render(o.default.createElement(u.default,{products:c}),document.getElementById("app"))}},[88]);