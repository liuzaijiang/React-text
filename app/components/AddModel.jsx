import React from 'react';

class AddModel extends React.Component{
	constructor(props){
	super(props);
  }
	
	handleSubmitClick(e){
		var newGoodObj={};
		newGoodObj.category=this.refs.addCategory.value;
		newGoodObj.name=this.refs.addName.value;
		newGoodObj.price=this.refs.addPrice.value;
		newGoodObj.stocked=this.refs.addStock.checked;
		this.props.products.push(newGoodObj);
		this.props.handleCloseClick(e);
		e.stopPropagation();
	}
	
	shouldComponentUpdate(nextProps, nextState) {
	  if (this.props.isAdd !== nextProps.isAdd) {
		return true;
		}
	  return false;
	}
	render(){
		console.log("AddModel render");
		let isAdd = this.props.isAdd;  
		if(!isAdd)
        return null;
		
        return (
          <div className="overLay">
            <h4 style={{'textAlign':'center'}}>商品新增</h4>
            <hr/>
            <form ref='addForm' className="addForm">
                <div>
                  <label htmlFor='staffAddName' style={{'display': 'block'}}>种类</label>
                  <input ref='addCategory' id='staffAddName' type='text' placeholder='Category'/>
                </div>
                <div>
                  <label htmlFor='staffAddAge' style={{'display': 'block'}}>名称</label>
                  <input ref='addName' id='staffAddAge' type='text' placeholder='Name'/>
                </div>
				<div>
                  <label htmlFor='staffAddPrice' style={{'display': 'block'}}>价格($)</label>
                  <input ref='addPrice' id='staffAddPrice' type='text' />
                </div>
				<div>
                  <label htmlFor='staffAddPrice' style={{'display': 'block'}}>是否有库存</label>
                  <input ref='addStock' id='staffAddPrice' type='checkbox' />
                </div>
                <div>
                  <label htmlFor='staffAddDescrip' style={{'display': 'block'}}>商品描述</label>
                  <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                </div>
                <p ref="tips" className='tips' >提交成功</p>
                <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
                <div>
                  <button type="button" onClick={(e)=>{this.handleSubmitClick(e)}} >提交</button>
				  <button type="button" onClick={(e)=>{this.props.handleCloseClick(e)}}>关闭</button>
				  <button type="reset" >重置</button>
                </div>
            </form>
          </div>
        )
    }
}

export default AddModel;