import React from 'react';

class Paging extends React.Component{
	constructor(props){
		super(props);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
	  if (this.props.products !== nextProps.products) {
		return true;
		}
	  if (this.props.currentPage !== nextProps.currentPage) {
		return true;
		}
	  return false;
	}

	render(){
	console.log("Paging render");
		if((this.props.products.length)/this.props.eachPage==parseInt(this.props.products.length/this.props.eachPage))
			{
				var totalPage=parseInt((this.props.products.length)/this.props.eachPage);
			}
		else
			{
				var totalPage=Math.ceil(this.props.products.length/this.props.eachPage);
			}
		var rows=[];
		var firstPageBan="";
		var prePageBan="";
		var nextPageBan="";
		var lastPageBan="";
		
		for(let i=1;i<=totalPage;i++)
		{
			rows.push(<option value={i-1}>{i}</option>)
		}
		if(this.props.currentPage<1){
			firstPageBan="ban";
			prePageBan="ban";
		}
		
	
		if(this.props.currentPage+1>=totalPage){
			nextPageBan="ban";
			lastPageBan="ban";
		}
		return(
		<div id="barcon" className="barcon">
        <div id="barcon2" className="barcon2">
            <ul onClick={(e)=>this.props.handleClickPage(e)}>
                <li><a href="###" id="firstPage" className={firstPageBan}>首页</a></li>
                <li><a href="###" id="prePage" className={prePageBan}>上一页</a></li>
                <li><a href="###" id="nextPage" className={nextPageBan}>下一页</a></li>
                <li><a href="###" id="lastPage" className={lastPageBan}>尾页</a></li>
                <li>
				  <label>跳转</label>
                    <select onChange={(e)=>this.props.handleGotoPage(e)} value={this.props.currentPage}>
						{rows}
                    </select>
                </li>
            </ul>
        </div>
    </div>
		)
	}
}

export default Paging;