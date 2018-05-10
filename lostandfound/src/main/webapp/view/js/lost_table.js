var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-12);
$(function(){
	
	//alert(APP_PATH);
	$("#lost_table").datagrid({
		url:'/lostandfound/view/lostInfo.do',
		
		fit:true,
		fitColumns:true,
		striped:true,
		rownumbers:true,
		border:false,
		pagination:true,
		pageSize:1,
		pageList:[1,2,5,10],
		pageNumber:1,
		toolbar:'#man_tool_l',
		columns:[[
			{
				field:'lostId',
				title:'编号',
				width:100,
				checkbox:true
			},
			{
				field:'lostName',
				title:'物品名称',
				width:100,
			},
			{
				field:'trait',
				title:'物品特征',
				width:100,
			},
			{
				field:'lostPlace',
				title:'遗失地点',
				width:100,
			},
			{
				field:'lostTime',
				title:'遗失时间',
				width:100,
				formatter:function(value,row,index){
					//console.log("value :"+value);
					//console.log("row:"+row);
					//console.log("index:"+index);
					return new Date(value).toLocaleString();
				},
			},
			{
				field:'losserName',
				title:'失者名称',
				width:100,
			},
			{
				field:'contact',
				title:'联系方式',
				width:100,
			},
			{
				field:'postDate',
				title:'报失日期',
				width:100,
				formatter:function(value,row,index){
					return new Date(value).toLocaleString();
				},
			},
			{
				field:'hasFound',
				title:'已找回?',
				width:100,
			},
		]],
	});
	
	$("#lost_add").dialog({
		width:360,
		title:'物品报失',
		modal:true,
		closed:true,
		buttons:[{
			text:'提交',
			handler:function(){
				if(is_add_form_valid2()){
					$.ajax({
						url:'/lostandfound/view/lost_add.do',
						type:'POST',
						data:{
							lostName:$("input[name='lostName']").val(),
							trait:$("input[name='trait']").val(),
							lostPlace:$("input[name='lostPlace']").val(),
							lostTime:$("input[name='lostTime']").val(),
							losserName:$("input[name='losserName']").val(),
							contact:$("input[name='contact']").val(),
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
								$("#lost_table").datagrid('reload');
								
								//跳转到新纪录行
								/*var options=$("#man_table").datagrid('getPager').data('pagination').options;
								var total=options.total;
								var rows=options.pageSize;
								var max=Math.ceil(total/rows);
								$("#man_table").datagrid('gotoPage',max+1);*/
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
	
	$("#lost_edit").dialog({
		width:350,
		title:'信息修改',
		modal:true,
		closed:true,
		buttons:[{
			text:'提交',
			handler:function(){
				//检验
				if(is_edit_form_valid2()){
					$.ajax({
						url:"/lostandfound/view/updateLostInfo.do",
						type:'POST',
						data:{
							lostId:$("#lost_edit input[name='id']").val(),
							lostName:$("#lost_edit input[name='lostName']").val(),
							trait:$("#lost_edit input[name='trait']").val(),
							lostPlace:$("#lost_edit input[name='lostPlace']").val(),
							lostTime:$("#lost_edit input[name='lostTime']").val(),
							losserName:$("#lost_edit input[name='losserName']").val(),
							contact:$("#lost_edit input[name='contact']").val(),
							postDate:$("#lost_edit input[name='postDate']").val(),
							hasFound:$("#lost_edit input[name='hasFound']").val(),
						},
						beforeSend:function(){
							$.messager.progress({
								text:'信息修改中....',
							});
						},
						success:function(data,response,status){
							$.messager.progress('close');
							if(data>0){
								$.messager.show({
									title:'提示',
									msg:'信息修改成功!',
								});
								$("#lost_edit").dialog('close').form('reset');
								$("#lost_table").datagrid('reload');
							}else{
								$.messager.alert('信息修改失败!','未知错误导致失败,请重试!','warning');
							}
						}
					});
				}
				
				
			}
		},{
			text:'取消',
			handler:function(){
				$("#lost_edit").dialog('close').form('reset');
			}
		}],
	});
	
	
	$("#info_query_l").dialog({
		width:350,
		title:'信息查询',
		modal:true,
		closed:true,
		buttons:[{
			text:'查询',
			handler:function(){
				//检验
				$("#lost_table").datagrid("load",{
					username:$.trim($("#info_query_l [name='goodsName']").val()),
					from:$("#info_query_l [name='from']").val(),
					to:$("#info_query_l [name='to']").val(),
				});
				$("#info_query_l").dialog('close').form('reset');
			}
		},{
			text:'取消',
			handler:function(){
				$("#info_query_l").dialog('close').form('reset');
			}
		}],
	});
	add_form_valid2();
	edit_form_valid2();
	man_tool_l={
			add:function(){
				$("#lost_add").dialog('open');
			},
			edit:function(){
				var rows=$('#lost_table').datagrid('getSelections');
				if(rows.length>1){
					$.messager.alert('WARNING!','编辑记录只能选定一条数据!','warning');
				}else if(rows.length==1){
					//console.log(rows);
					$.ajax({
						url:"/lostandfound/view/querySingleLostInfo.do",
						type:"POST",
						data:{
							id:rows[0].lostId,
						},
						beforeSend:function(){
							$.messager.progress({
								text:'数据获取中....',
							});
						},
						success:function(data,response,status){
							$.messager.progress('close');
							//console.log(data);
							if(data){
								
								$("#lost_edit").form('load',{
									id:data.lostId,
									lostName:data.lostName,
									trait:data.trait,
									lostPlace:data.lostPlace,
									lostTime:new Date(data.lostTime).toLocaleString(),
									losserName:data.losserName,
									contact:data.contact,
									postDate:new Date(data.postDate).toLocaleString(),
									hasFound:data.hasFound,
								}).dialog('open');
							}else{
								$.messager.alert('数据获取失败!','未知错误导致失败,请重试!','warning');
							}
						}
					});
				}else{
					$.messager.alert('WARNING!','编辑记录至少选定一条数据!','warning');
				}
			},
			remove:function(){
				var rows=$("#lost_table").datagrid('getSelections');
				if(rows.length>0){
					$.messager.confirm('确定操作','确定删除所选记录?',function(flag){
						if(flag){
							var ids=[];
							for(var i=0;i<rows.length;i++){
								ids.push(rows[i].lostId);
							}
							
							$.ajax({
								type:'POST',
								url:'/lostandfound/view/deleteLostInfo.do',
								data:{
									ids:ids.join(','),
								},
								beforeSend:function(){
									$("#lost_table").datagrid('loading');
								},
								success:function(data){
									$("#lost_table").datagrid('loaded');
									$("#lost_table").datagrid('load');
									$("#lost_table").datagrid('unselectAll');
									$.messager.show({
										title:'提示',
										msg:data+'条记录删除成功!',
									});
								},
							});
						}else{
							$("#lost_table").datagrid('unselectAll');
						}
					});
				}else{
					$.messager.alert('提示','请选择要删除的记录!','info');
				}
			},
			search:function(){
				$("#info_query_l").dialog('open');
			}
	}
	
	$("#from,#to").datebox({
		editable:false,
	});
});

function add_form_valid2(){
	$("#lost_add input[name='lostName']").validatebox({
		required:true,
		
	});
	$("#lost_add input[name='lostPlace']").validatebox({
		required:true,
		
	});
	$("#lost_add input[name='lostTime']").validatebox({
		required:true,
		
	});
	$("#lost_add input[name='losserName']").validatebox({
		required:true,
		validType:'nameRule'
	});
	$("#lost_add input[name='contact']").validatebox({
		required:true,
		validType:'contact'
	});
}

function is_add_form_valid2(){
	if(!$("#lost_add input[name='lostName']").validatebox("isValid")){
		$("#lost_add input[name='lostName']").focus();
		return false;
	}
	if(!$("#lost_add input[name='lostPlace']").validatebox("isValid")){
		$("#lost_add input[name='lostPlace']").focus();
		return false;
	}
	if(!$("#lost_add input[name='lostTime']").validatebox("isValid")){
		$("#lost_add input[name='lostTime']").focus();
		return false;
	}
	if(!$("#lost_add input[name='losserName']").validatebox("isValid")){
		$("#lost_add input[name='losserName']").focus();
		return false;
	}
	if(!$("#lost_add input[name='contact']").validatebox("isValid")){
		$("#lost_add input[name='contact']").focus();
		return false;
	}
	return true;
}

function edit_form_valid2(){
	$("#lost_edit input[name='lostName']").validatebox({
		required:true,
		
	});
	$("#lost_edit input[name='lostPlace']").validatebox({
		required:true,
		
	});
	$("#lost_edit input[name='lostTime']").validatebox({
		required:true,
		
	});
	$("#lost_edit input[name='losserName']").validatebox({
		required:true,
		validType:'nameRule'
	});
	$("#lost_edit input[name='contact']").validatebox({
		required:true,
		validType:'contact'
	});
}

function is_edit_form_valid2(){
	if(!$("#lost_edit input[name='lostName']").validatebox("isValid")){
		$("#lost_edit input[name='lostName']").focus();
		return false;
	}
	if(!$("#lost_edit input[name='lostPlace']").validatebox("isValid")){
		$("#lost_edit input[name='lostPlace']").focus();
		return false;
	}
	if(!$("#lost_edit input[name='lostTime']").validatebox("isValid")){
		$("#lost_edit input[name='lostTime']").focus();
		return false;
	}
	if(!$("#lost_edit input[name='losserName']").validatebox("isValid")){
		$("#lost_edit input[name='losserName']").focus();
		return false;
	}
	if(!$("#lost_edit input[name='contact']").validatebox("isValid")){
		$("#lost_edit input[name='contact']").focus();
		return false;
	}
	return true;
}

//统一日期格式
Date.prototype.toLocaleString=function(){
	return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+"";
}

/*function to_Int(){
	var str=$("#lost_edit input[name='postDate']").val();
	return str=="是"?1:0;
}*/