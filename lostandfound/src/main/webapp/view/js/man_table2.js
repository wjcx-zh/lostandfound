var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-12);
$(function(){
	
	//alert(APP_PATH);
	$("#man_table2").datagrid({
		url:APP_PATH+'/man_table2.do',
		
		fit:true,
		fitColumns:true,
		striped:true,
		rownumbers:true,
		border:false,
		pagination:true,
		pageSize:1,
		pageList:[1,2,5,10],
		pageNumber:1,
		sortName:'userId',
		sortOrder:"desc",
		toolbar:'#man_tool2',
		columns:[[
			{
				field:'userId',
				title:'编号',
				width:100,
				checkbox:true
			},
			{
				field:'username',
				title:'用户姓名',
				width:100,
			},
			{
				field:'qq',
				title:'QQ',
				width:100,
			},
			{
				field:'email',
				title:'邮箱',
				width:100,
			},
			{
				field:'phone',
				title:'联系号码',
				width:100,
			},
		]],
	});
	
	$("#man_add2").dialog({
		width:360,
		title:'新增用户',
		modal:true,
		closed:true,
		buttons:[{
			text:'提交',
			handler:function(){
				if($("#man_add2").form('validate')){
					$.ajax({
						url:APP_PATH+'/man_add.do',
						type:'POST',
						data:{
							manager:$("#man_add2 input[name=manager]").val(),
							password:$("#man_add2 input[name=password]").val(),
							role:2
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
									msg:'用户已成功添加!',
								});
								
								$("#man_add2").form('reset');
								$("#man_add2").dialog('close');
								$("#man_table2").datagrid('reload');
								
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
				$("#man_add2").form('reset');
				$("#man_add2").dialog('close');
			}
		}],
	});
	
	$("#man_edit2").dialog({
		width:350,
		title:'信息修改',
		modal:true,
		closed:true,
		buttons:[{
			text:'提交',
			handler:function(){
				//检验
				$.ajax({
					url:APP_PATH+"/updateManager.do",
					type:'POST',
					data:{
						id:$("input[name='id']").val(),
						QQ:$("input[name='QQ']").val(),
						email:$("input[name='email']").val(),
						phone:$("input[name='phone']").val(),
						username:$("#man_edit2 input[name='manager']").val(),
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
							$("#man_edit2").dialog('close').form('reset');
							$("#man_table2").datagrid('reload');
						}else{
							$.messager.alert('信息修改失败!','未知错误导致失败,请重试!','warning');
						}
					}
				});
				
			}
		},{
			text:'取消',
			handler:function(){
				$("#man_edit2").dialog('close').form('reset');
			}
		}],
	});
	$("#info_query_u").dialog({
		width:350,
		title:'信息查询',
		modal:true,
		closed:true,
		buttons:[{
			text:'查询',
			handler:function(){
				//检验
				$("#man_table2").datagrid("load",{
					username:$.trim($("#info_query_u [name='username']").val()),
					phone:$("#info_query_u [name='phone']").val(),
					
				});
				$("#info_query_u").dialog('close').form('reset');
			}
		},{
			text:'取消',
			handler:function(){
				$("#info_query_u").dialog('close').form('reset');
			}
		}],
	});
	man_tool_u={
			add:function(){
				$("#man_add2").dialog('open');
			},
			edit:function(){
				var rows=$('#man_table2').datagrid('getSelections');
				if(rows.length>1){
					$.messager.alert('WARNING!','编辑记录只能选定一条数据!','warning');
				}else if(rows.length==1){
					//console.log(rows);
					$.ajax({
						url:APP_PATH+"/getManager.do",
						type:"POST",
						data:{
							id:rows[0].userId,
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
								
								$("#man_edit2").form('load',{
									id:data.userId,
									manager:data.username,
									QQ:data.qq,
									email:data.email,
									phone:data.phone,
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
				var rows=$("#man_table2").datagrid('getSelections');
				if(rows.length>0){
					$.messager.confirm('确定操作','确定删除所选记录?',function(flag){
						if(flag){
							var ids=[];
							for(var i=0;i<rows.length;i++){
								ids.push(rows[i].userId);
							}
							
							$.ajax({
								type:'POST',
								url:APP_PATH+'/deleteManager.do',
								data:{
									ids:ids.join(','),
								},
								beforeSend:function(){
									$("#man_table2").datagrid('loading');
								},
								success:function(data){
									$("#man_table2").datagrid('loaded');
									$("#man_table2").datagrid('load');
									$("#man_table2").datagrid('unselectAll');
									$.messager.show({
										title:'提示',
										msg:data+'条记录删除成功!',
									});
								},
							});
						}else{
							$("#man_table2").datagrid('unselectAll');
						}
					});
				}else{
					$.messager.alert('提示','请选择要删除的记录!','info');
				}
			},
			search:function(){
				$("#info_query_u").dialog("open");
			},
	}
});