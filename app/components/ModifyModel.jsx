import React from 'react';


class ModifyModel extends React.Component{
	constructor(props){
	super(props);
	this.state={
		isModify:this.props.isModify,
		products:this.props.products
	}
  }
	
	handleSubmitClick(e){
		var newGoodObj={};
		newGoodObj.category=this.refs.modifyCategory.value;
		newGoodObj.name=this.refs.modifyName.value;
		newGoodObj.price=this.refs.modifyPrice.value;
		newGoodObj.stocked=this.refs.modifyStock.checked;
		let index=null;
		
		this.state.products.filter((product,i)=>{
			 if(product.name==this.props.modifyKey)
				{
					index=i;
					return
				}
		 })
		this.state.products.splice(index,1,newGoodObj);
		this.setState({
			products:this.state.products
		})
		this.props.handleCloseClick(e);
		e.stopPropagation();
	}
	
	handleResetClick(){
		this.refs.modifyCategory.value=this.refs.modifyCategory.defaultValue;
		this.refs.modifyName.value=this.refs.modifyName.defaultValue
		this.refs.modifyPrice.value=this.refs.modifyPrice.defaultValue
		this.refs.modifyStock.checked=this.refs.modifyStock.defaultChecked
	}
	
	render(){
		let isModify = this.props.isModify;  
		if(!isModify)
        return null;
		
		let modifyProduct=this.state.products.filter(product=>{
			return product.name==this.props.modifyKey
		 }	
		)
		
        return (
          <div className="overLay">
            <h4 style={{'textAlign':'center'}}>商品修改</h4>
            <hr/>
            <form ref='modifyForm' className="addForm">
                <div>
                  <label htmlFor='staffAdName' style={{'display': 'block'}}>种类</label>
                  <input ref='modifyCategory' id='modifyCategory' type='text' defaultValue={modifyProduct[0].category}/>
                </div>
                <div>
                  <label htmlFor='staffAddAge' style={{'display': 'block'}}>名称</label>
                  <input ref='modifyName' id='modifyName' type='text' defaultValue={modifyProduct[0].name}/>
                </div>
				<div>
                  <label htmlFor='staffAddPrice' style={{'display': 'block'}}>价格($)</label>
                  <input ref='modifyPrice' id='modifyPrice' type='text' defaultValue={modifyProduct[0].price}/>
                </div>
				<div>
                  <label htmlFor='staffAddPrice' style={{'display': 'block'}}>是否有库存</label>
                  <input ref='modifyStock' id='modifyStock' type='checkbox' defaultChecked={modifyProduct[0].stocked}/>
                </div>
                <div>
                  <label htmlFor='staffAddDescrip' style={{'display': 'block'}}>商品描述</label>
                  <textarea ref='modifyDescrip' id='modifyDescrip' type='text'></textarea>
                </div>
                <p ref="tips" className='tips' >提交成功</p>
                <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
                <div>
                  <button type="button" onClick={(e)=>{this.handleSubmitClick(e)}} >提交</button>
				  <button type="button" onClick={(e)=>{this.props.handleCloseClick(e)}}>关闭</button>
				  <button type="button" onClick={(e)=>{this.handleResetClick(e)}}>重置</button>
                </div>
            </form>
          </div>
        )
    }
}

export default ModifyModel;