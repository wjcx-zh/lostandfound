var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
if(path_length>35){
	APP_PATH=APP_PATH.substring(0,path_length-15);
}else{
	APP_PATH=APP_PATH.substring(0,path_length-1);
}
//APP_PATH=APP_PATH.substring(0,path_length-11);
var lostUrl="/view/lostInfo.do";
var foundUrl="/view/foundInfo.do";
$(function(){
	//初始化信息
	init_msg();
	//加载页面信息
	show_info(1,1,lostUrl);
	show_info(1,1,foundUrl);
	
	reportFoundInfo();
	reportLostInfo();
	info_query();
	
	displayMsg($("#lost_info"));
	displayMsg($("#found_info"));
	//报失
	$("#lost_a").click(function(){
		//alert($("#show").text());
		if(ifContains($("#show").text(),"登录")){
			$.messager.alert("警告","当前未登录！请登录！","warning");
		}else{
			$("#lost_add").dialog("open");
		}
		
	});
	
	//招领
	$("#find_a").click(function(){
		if(ifContains($("#show").text(),"登录")){
			$.messager.alert("警告","当前未登录！请登录！","warning");
		}else{
			$("#found_add").dialog("open");
		}
	});
	
	//条件查询
	$("#query_a").click(function(){
		$("#info_query").dialog("open");
	});
	
	
});



//统一日期格式
Date.prototype.toLocaleString=function(){
	return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日";
}
//初始化
function init_msg(){
	$.ajax({
		url:APP_PATH+"/view/login_user.do",
		type:"POST",
		success:function(data){
		//alert(data);
			
			if(data==true){
				$("#loguser").show();
				$("#show").append("|").append("<a id='personal' href='javascript:void(0);' onclick='personal();'>个人中心</a>").append("|").append('<a id="quit" href="javascript:void(0);" onclick="exit();">退出</a>');
			}else{
				$("#loguser").hide();
				$("#show").append("<a href='/lostandfound/view/login.html'>登录</a>");
			}
		},
	});
}

//页面条
function page_info(total,pn,pgSize,bar){
	var url;
	if(bar.attr('name')=="lp"){
		url=lostUrl;
	}else if(bar.attr('name')=="fp"){
		url=foundUrl;
	}
	console.log("page:"+pn+",pageSize:"+pgSize);
	$(bar).pagination({ 
		
		
		total:total, 
		pageSize:pgSize,
		pageNumber:pn,
		pageList:[1,2,5,10],
		displayMsg:"当前显示第{from}-{to}条记录,共{total}条记录",
		onSelectPage:function(pn, pgSize){
			//alert(pn+","+pgSize);
			show_info(pn,pgSize,url);
		},
		onChangePageSize:function(pgSize){
			pn=1;
			show_info(pn,pgSize,url);
		},

	}); 

}

//分页信息
function show_info(pn,pgSize,url){
	$.ajax({
		url:APP_PATH+url,
		type:"GET",
		data:"page="+pn+"&rows="+pgSize,
		success:function(data){
			var pe;
			console.log("show:"+pn+" "+pgSize);
			if(ifContains(url,"lost")){
				pe=$("#dl");
			}else if(ifContains(url,"found")){
				pe=$("#dln");
			}
			//分页信息的展示
			info_list(data,pn,pgSize,pe);
			
			
		},
	});
}
//分页查询信息
function show_query_info(pn,pgSize,data,extraMsg){
	var pe;
	if(ifContains(extraMsg,"lost")){
		pe=$("#dl");
	}else if(ifContains(extraMsg,"found")){
		pe=$("#dln");
	}
	//分页信息的展示
	info_list(data,pn,pgSize,pe);
}
//分页信息的展示
function info_list(data,pn,pgSize,pe){
	$(pe).empty();
	var total=data.total;
	var pn=pn,pgSize=pgSize;
	//console.log(pe.attr("name"));
	var li,text,aInfo,span,amore,bar,aId,pid;
	//console.log($("#page"));
	$.each(data.rows,function(index,obj){
		
		li=$("<li></li>");
		if(pe.attr('name')=="ldl"){
			text=obj.losserName+"于"+new Date(obj.lostTime).toLocaleString()+"在"+obj.lostPlace+"遗失了"+obj.lostName+",请拾到者尽快联系!";
			span=$("<span style='margin-right:16px;float:right;'></span>").append(new Date(obj.postDate).toLocaleString());
			pid="lost";
			aId=obj.lostId;
			bar=$("#page");
		}else if(pe.attr('name')=="fdl"){
			text=obj.finderName+"于"+new Date(obj.findTime).toLocaleString()+"在"+obj.findPlace+"找到了"+obj.findName+",请遗失者尽快联系!";
			span=$("<span style='margin-right:16px;float:right;'></span>").append(new Date(obj.storeDate).toLocaleString());
			pid="found";
			aId=obj.findId;
			bar=$("#fpage");
		}
		aInfo=$("<a href='javascript:void(0);'></a>").append(text);
		amore=$("<a href='javascript:void(0);' style='margin-right:20px;float:right;' onclick=showInfos("+aId+",'"+pid+"'"+")></a>").append("详情");
		amore.prop('class','more');
		amore.prop('id',pid+aId);
		amore.attr('num',aId);
		//console.log(amore);
		li.append(aInfo).append(span).append(amore).appendTo(pe);
		//console.log(text);
		
	});
	page_info(total,pn,pgSize,bar);
}

//物品详情信息展示
function displayMsg(ele){
	
	$(ele).dialog({
		  
	    title: '详情信息',    
	    width: 400,    
	    //height: 200,    
	    closed: true,       
	    modal: true ,  
	    buttons:[{
			text:'认领',
			handler:function(){
				var str=$("a[choose='choosed']");
				var id_info=str.attr('id');
				var num=str.attr('num');
				
				if(ifContains(id_info,"lost")){
					changeState(num,"lost",lostUrl);
				}else if(ifContains(id_info,"found")){
					changeState(num,"found",foundUrl);
				}
				str.removeAttr('choose');
				$(ele).form('reset').dialog('close');
				//if()
			}
		},{
			text:'返回',
			handler:function(){
				$(ele).form('reset').dialog('close');
			}
		}],
    

	});
	
}


//报失窗口
function reportLostInfo(){
	$("#lost_add").dialog({
		  
	    title: '物品报失',    
	    width: 400,    
	    //height: 200,    
	    closed: true,       
	    modal: true ,  
	    buttons:[{
			text:'提交',
			handler:function(){
				if($("#lost_add").form("validate")){
					$.ajax({
						url:APP_PATH+"/view/lost_add.do",
						type:"POST",
						data:{
							lostName:$("#lost_add input[name='lostName']").val(),
							trait:$("#lost_add input[name='trait']").val(),
							lostPlace:$("#lost_add input[name='lostPlace']").val(),
							lostTime:$("#lost_add input[name='lostTime']").val(),
							losserName:$("#lost_add input[name='losserName']").val(),
							contact:$("#lost_add input[name='contact']").val(),
						},
						beforeSend:function(){
							$.messager.progress({
								text:'提交中....',
							});
						},
						success:function(data,response,status){
							$.messager.progress('close');
							//console.log(data+" aaaa"+response+" www"+status);
							if(data>0){
								$.messager.show({
									title:'提示',
									msg:'报失信息已成功添加!',
								});
								
								$("#lost_add").form('reset');
								$("#lost_add").dialog('close');
								show_info(1,5,lostUrl);
			
							}else{
								$.messager.alert('操作失败!','未知错误导致失败,请重试!','warning');
							}
						}
					});
				}
			}
		},{
			text:'取消',
			handler:function(){
				$("#lost_add").form('reset');
				$("#lost_add").dialog('close');
			}
		}],
    

	});
}

//招领窗口
function reportFoundInfo(){
	$("#found_add").dialog({
		  
	    title: '物品招领',    
	    width: 400,    
	    //height: 200,    
	    closed: true,       
	    modal: true ,  
	    buttons:[{
			text:'提交',
			handler:function(){
				if($("#found_add").form('validate')){
					$.ajax({
						url:APP_PATH+'/view/found_add.do',
						type:'POST',
						data:{
							findName:$("#found_add input[name='findName']").val(),
							trait:$("#found_add input[name='trait']").val(),
							findPlace:$("#found_add input[name='findPlace']").val(),
							findTime:$("#found_add input[name='findTime']").val(),
							finderName:$("#found_add input[name='finderName']").val(),
							contact:$("#found_add input[name='contact']").val(),
							storePlace:$("#found_add input[name='storePlace']").val(),
						},
						beforeSend:function(){
							$.messager.progress({
								text:'提交中....',
							});
						},
						success:function(data,response,status){
							$.messager.progress('close');
							//console.log(data+" aaaa"+response+" www"+status);
							if(data>0){
								$.messager.show({
									title:'提示',
									msg:'招领信息已成功添加!',
								});
								
								$("#found_add").form('reset');
								$("#found_add").dialog('close');
								show_info(1,5,foundUrl);
							
							}else{
								$.messager.alert('操作失败!','未知错误导致失败,请重试!','warning');
							}
							
						}
					});
				}
			}
		},{
			text:'取消',
			handler:function(){
				$("#found_add").form('reset');
				$("#found_add").dialog('close');
			}
		}],
    

	});
}

//信息查询
function info_query(){
	$("#info_query").dialog({
		  
	    title: '信息查询',    
	    width: 400,    
	    //height: 200,    
	    closed: true,       
	    modal: true ,  
	    buttons:[{
			text:'查询',
			handler:function(){
				if($("#info_query").form("validate")){
					$.ajax({
						url:APP_PATH+"/view/info_query.do",
						type:"POST",
						data:{
							goodsName:$("input[name='goodsName']").val(),
							from:$("input[name='from']").val(),
							to:$("input[name='to']").val(),
							pn:1,
							pageSize:5,
						},
						beforeSend:function(){
							$.messager.progress({
								text:"信息查询中....",
							});
						},
						success:function(data,response,status){
							$.messager.progress("close");
							if(data){
								
								var query_class;
								if(data.lostInfo.total>0){
									query_class="lost";
									show_query_info(1,5,data.lostInfo,query_class);
								}else{
									$("#dl").empty();
								}
								if(data.foundInfo.total>0){
									query_class="found";
									show_query_info(1,5,data.foundInfo,query_class);
								}else{
									$("#dln").empty();
								}
								$.messager.show({
									title:'提示',
									msg:'信息已成功加载!',
								});
							}else{
								$.messager.alert("信息查询失败","未知错误导致失败!","warning");
							}
							$("#info_query").form("reset").dialog("close");
						},
					});
				}
			}
		},{
			text:'取消',
			handler:function(){
				$("#info_query").form("reset").dialog("close");
			}
		}],
    

	});
}

//认领物品改变状态
function changeState(id,choose,url){
	$.ajax({
		url:APP_PATH+"/view/changeInfo.do",
		type:"POST",
		data:{
			id:id,
			choose:choose,
		},
		beforeSend:function(){
			$.messager.progress({
				text:"数据保存中......",
			});
		},
		success:function(data){
			$.messager.progress('close');
			if(data>0){
				show_info(1,5,url);
				$.messager.show({
					title:'提示',
					msg:'物品认领成功!',
				});
			}else{
				$.messager.alert("认领失败","未知错误导致失败!请重试...","warning");
			}
		},
	});
}
//退出登录
function exit(){
	
	$.ajax({
		url:APP_PATH+"/view/exit.do",
		type:"POST",
		success:function(data){
			
			location.href=APP_PATH+"/view/index.jsp";
		},
	});
	
}

function personal(){
	location.href=APP_PATH+"/view/user.jsp";
}

function setAtr(aId,pid){
	var a_get=pid+aId;
	var ac=$('#'+a_get);
	ac.attr('choose','choosed');
	//console.log(ac);
}
//字符串包含
function ifContains(str,subStr){
	//console.log(str.indexOf(subStr));
	return str.indexOf(subStr)>=0;
}