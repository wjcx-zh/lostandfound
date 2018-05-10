var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-12);
$(function(){
	
	//alert(APP_PATH);
	$("#found_table").datagrid({
		url:'/lostandfound/view/foundInfo.do',
		
		fit:true,
		fitColumns:true,
		striped:true,
		rownumbers:true,
		border:false,
		pagination:true,
		pageSize:1,
		pageList:[1,2,5,10],
		pageNumber:1,
		toolbar:'#man_tool_f',
		columns:[[
			{
				field:'findId',
				title:'编号',
				width:100,
				checkbox:true
			},
			{
				field:'findName',
				title:'物品名称',
				width:100,
			},
			{
				field:'trait',
				title:'物品特征',
				width:100,
			},
			{
				field:'findPlace',
				title:'捡拾地点',
				width:100,
			},
			{
				field:'findTime',
				title:'捡拾时间',
				width:100,
				formatter:function(value,row,index){
					return new Date(value).toLocaleString();
				},
			},
			{
				field:'finderName',
				title:'拾者名称',
				width:100,
				
			},
			{
				field:'contact',
				title:'联系方式',
				width:100,
			},
			{
				field:'storePlace',
				title:'领取地点',
				width:100,
			},
			{
				field:'storeDate',
				title:'发布日期',
				width:100,
				formatter:function(value,row,index){
					return new Date(value).toLocaleString();
				},
			},
			{
				field:'hasReturn',
				title:'被领取?',
				width:100,
			},
		]],
	});
	
	$("#found_add").dialog({
		width:360,
		title:'物品招领',
		modal:true,
		closed:true,
		buttons:[{
			text:'提交',
			handler:function(){
				if(is_add_form_valid()){
					$.ajax({
						url:'/lostandfound/view/found_add.do',
						type:'POST',
						data:{
							findName:$("input[name='findName']").val(),
							trait:$("input[name='trait']").val(),
							findPlace:$("input[name='findPlace']").val(),
							findTime:$("input[name='findTime']").val(),
							finderName:$("input[name='finderName']").val(),
							contact:$("input[name='contact']").val(),
							storePlace:$("input[name='storePlace']").val(),
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
								
								$("#found_add").form('reset');
								$("#found_add").dialog('close');
								$("#found_table").datagrid('reload');
							
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
	
	$("#found_edit").dialog({
		width:350,
		title:'信息修改',
		modal:true,
		closed:true,
		buttons:[{
			text:'提交',
			handler:function(){
				//检验
				if(is_edit_form_valid()){
					$.ajax({
						url:"/lostandfound/view/updateFoundInfo.do",
						type:'POST',
						data:{
							findId:$("#found_edit input[name='id']").val(),
							findName:$("#found_edit input[name='findName']").val(),
							trait:$("#found_edit input[name='trait']").val(),
							findPlace:$("#found_edit input[name='findPlace']").val(),
							findTime:$("#found_edit input[name='findTime']").val(),
							finderName:$("#found_edit input[name='finderName']").val(),
							contact:$("#found_edit input[name='contact']").val(),
							storeDate:$("#found_edit input[name='storeDate']").val(),
							storePlace:$("#found_edit input[name='storePlace']").val(),
							hasReturn:$("#found_edit input[name='hasReturn']").val(),
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
								$("#found_edit").dialog('close').form('reset');
								$("#found_table").datagrid('reload');
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
				$("#found_edit").dialog('close').form('reset');
			}
		}],
	});
	$("#info_query_f").dialog({
		width:350,
		title:'信息查询',
		modal:true,
		closed:true,
		buttons:[{
			text:'查询',
			handler:function(){
				//检验
				$("#found_table").datagrid("load",{
					username:$.trim($("#info_query_f [name='goodsName']").val()),
					from:$("#info_query_f [name='from']").val(),
					to:$("#info_query_f [name='to']").val(),
				});
				$("#info_query_f").dialog('close').form('reset');
			}
		},{
			text:'取消',
			handler:function(){
				$("#info_query_f").dialog('close').form('reset');
			}
		}],
	});
	add_form_valid();
	edit_form_valid();
	man_tool_f={
			add:function(){
				$("#found_add").dialog('open');
			},
			edit:function(){
				var rows=$('#found_table').datagrid('getSelections');
				if(rows.length>1){
					$.messager.alert('WARNING!','编辑记录只能选定一条数据!','warning');
				}else if(rows.length==1){
					//console.log(rows);
					$.ajax({
						url:"/lostandfound/view/querySingleFoundInfo.do",
						type:"POST",
						data:{
							id:rows[0].findId,
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
								
								$("#found_edit").form('load',{
									id:data.findId,
									findName:data.findName,
									trait:data.trait,
									findPlace:data.findPlace,
									findTime:data.findTime,
									finderName:data.finderName,
									contact:data.contact,
									storeDate:data.storeDate,
									storePlace:data.storePlace,
									hasReturn:data.hasReturn,
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
				var rows=$("#found_table").datagrid('getSelections');
				if(rows.length>0){
					$.messager.confirm('确定操作','确定删除所选记录?',function(flag){
						if(flag){
							var ids=[];
							for(var i=0;i<rows.length;i++){
								ids.push(rows[i].findId);
							}
							
							$.ajax({
								type:'POST',
								url:'/lostandfound/view/deleteFoundInfo.do',
								data:{
									ids:ids.join(','),
								},
								beforeSend:function(){
									$("#found_table").datagrid('loading');
								},
								success:function(data){
									$("#found_table").datagrid('loaded');
									$("#found_table").datagrid('load');
									$("#found_table").datagrid('unselectAll');
									$.messager.show({
										title:'提示',
										msg:data+'条记录删除成功!',
									});
								},
							});
						}else{
							$("#found_table").datagrid('unselectAll');
						}
					});
				}else{
					$.messager.alert('提示','请选择要删除的记录!','info');
				}
			},
			search:function(){
				$("#info_query_f").dialog('open');
				//alert("wjcx");
			}
	}
	
	$("#from,#to").datebox({
		editable:false,
	});
});

function add_form_valid(){
	$("#found_add input[name='findName']").validatebox({
		required:true,
		
	});
	$("#found_add input[name='findPlace']").validatebox({
		required:true,
		
	});
	$("#found_add input[name='findTime']").validatebox({
		required:true,
		
	});
	$("#found_add input[name='finderName']").validatebox({
		required:true,
		validType:'nameRule'
	});
	$("#found_add input[name='contact']").validatebox({
		required:true,
		validType:'contact'
	});
}

function is_add_form_valid(){
	if(!$("#found_add input[name='findName']").validatebox("isValid")){
		$("#found_add input[name='findName']").focus();
		return false;
	}
	if(!$("#found_add input[name='findPlace']").validatebox("isValid")){
		$("#found_add input[name='findPlace']").focus();
		return false;
	}
	if(!$("#found_add input[name='findTime']").validatebox("isValid")){
		$("#found_add input[name='findTime']").focus();
		return false;
	}
	if(!$("#found_add input[name='finderName']").validatebox("isValid")){
		$("#found_add input[name='finderName']").focus();
		return false;
	}
	if(!$("#found_add input[name='contact']").validatebox("isValid")){
		$("#found_add input[name='contact']").focus();
		return false;
	}
	return true;
}

function edit_form_valid(){
	$("#found_edit input[name='findName']").validatebox({
		required:true,
		
	});
	$("#found_edit input[name='findPlace']").validatebox({
		required:true,
		
	});
	$("#found_edit input[name='findTime']").validatebox({
		required:true,
		
	});
	$("#found_edit input[name='finderName']").validatebox({
		required:true,
		validType:'nameRule'
	});
	$("#found_edit input[name='contact']").validatebox({
		required:true,
		validType:'contact'
	});
}

function is_edit_form_valid(){
	if(!$("#found_edit input[name='findName']").validatebox("isValid")){
		$("#found_edit input[name='findName']").focus();
		return false;
	}
	if(!$("#found_edit input[name='findPlace']").validatebox("isValid")){
		$("#found_edit input[name='findPlace']").focus();
		return false;
	}
	if(!$("#found_edit input[name='findTime']").validatebox("isValid")){
		$("#found_edit input[name='findTime']").focus();
		return false;
	}
	if(!$("#found_edit input[name='finderName']").validatebox("isValid")){
		$("#found_edit input[name='finderName']").focus();
		return false;
	}
	if(!$("#found_edit input[name='contact']").validatebox("isValid")){
		$("#found_edit input[name='contact']").focus();
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