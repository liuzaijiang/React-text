import React from 'react';

class Paging extends React.Component{
	constructor(props){
		super(props);
	}

	goPage(pno,psize){
    var itable = document.getElementById("adminTbody");
    var num = this.props.products.length;//表格所有行数(所有记录数)
	var totalPage = 0;//总页数
    pageSize = psize;//每页显示行数
    //总共分几页 
    if(num/pageSize > parseInt(num/pageSize)){   
            totalPage=parseInt(num/pageSize)+1;   
       }else{   
           totalPage=parseInt(num/pageSize);   
       }   
    var currentPage = pno;//当前页数

    var startRow = (currentPage - 1) * pageSize+1; 
       var endRow = currentPage * pageSize;
       endRow = (endRow > num)? num : endRow;    
       //遍历显示数据实现分页
    for(var i=1;i<(num+1);i++){    
        var irow = itable.rows[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "";    
        }else{
            irow.style.display = "none";
        }
    }
    //var tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";
	var tempStr = ["Total ", "共"][LANGUAGE]+num+[" Records Divided into ", "条记录 分"][LANGUAGE]+totalPage+[" Pages Current ", "页 当前第"][LANGUAGE]+currentPage+[" Pages", "页"][LANGUAGE]
	 document.getElementById("barcon1").innerHTML = tempStr;
	 
    if(currentPage>1){
		$("#firstPage").on("click",function(){
			goPage(1,psize);
		}).removeClass("ban");
		$("#prePage").on("click",function(){
			goPage(currentPage-1,psize);
		}).removeClass("ban");   
    }else{
		$("#firstPage").off("click").addClass("ban");
		$("#prePage").off("click").addClass("ban");  
    }

    if(currentPage<totalPage){
		$("#nextPage").on("click",function(){
			goPage(currentPage+1,psize);
		}).removeClass("ban")
		$("#lastPage").on("click",function(){
			goPage(totalPage,psize);
		}).removeClass("ban")
    }else{
		$("#nextPage").off("click").addClass("ban");
		$("#lastPage").off("click").addClass("ban");
    }   
	var tempOption="";
	for(var i=1;i<=totalPage;i++)
	{
		tempOption+='<option value='+i+'>'+i+'</option>'
	}
	$("#jumpWhere").html(tempOption);
	$("#jumpWhere").val(currentPage);
	}
	render(){
		return(
		<div id="barcon" className="barcon">
        <div id="barcon1" className="barcon1"></div>
        <div id="barcon2" className="barcon2">
            <ul>
                <li><a href="###" id="firstPage">首页</a></li>
                <li><a href="###" id="prePage">上一页</a></li>
                <li><a href="###" id="nextPage">下一页</a></li>
                <li><a href="###" id="lastPage">尾页</a></li>
                <li>
                    <select id="jumpWhere">
                    </select>
                </li>
                <li><a href="###" id="jumpPage" >跳转</a></li>
            </ul>
        </div>
    </div>
		)
	}
}

export default Paging;