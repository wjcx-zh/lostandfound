var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-11);
$(function(){
	//登录界面
	//alert(APP_PATH);
	//alert(document.cookie);
	$("#login").dialog({
		title:'登录后台',
		width:320,
		height:200,
		modal:true,
		buttons:"#btn"
	});
	//alert(path_length);
	//帐号验证
	$("#username").validatebox({
		required:true,
		missingMessage:"请输入用户账号",
		
	});
	//帐号验证
	$("#password").validatebox({
		required:true,
		//validType:"length[4,20]",
		missingMessage:"请输入用户密码",
		
	});
	
	if(!$("#username").validatebox('isValid')){
		$("#username").focus();
	}else if(!$("#password").validatebox('isValid')){
		$("#password").focus();
	}
	
	//登录
	$("#btn a").click(function(){
		//console.log($("#role input[name='role']:checked").val());
		if(!$("#username").validatebox('isValid')){
			$("#username").focus();
			return false;
		}else if(!$("#password").validatebox('isValid')){
			$("#password").focus();
			return false;
		}
		$.ajax({
			url:APP_PATH+"/login.do",
			data:{
				username:$("#username").val(),
				password:$("#password").val(),
				role:$("#role input[name='role']:checked").val(),
			},
			type:"POST",
			beforeSend:function(){
				$.messager.progress({
					text:"登录中...."
				});
				
			},
			success:function(result){
				console.log(result);
				location.href=APP_PATH+result;
			}
		});
	});
});