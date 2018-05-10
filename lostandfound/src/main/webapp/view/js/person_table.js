var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-13);
$(function(){
	//form_valid();
	var per=$("#person_form input");
	//alert(APP_PATH);
	$.each(per,function(index,obj){
		//console.log(obj);
		$(obj).attr('disabled',"disabled");
	});
	$.ajax({
		url:APP_PATH+"view/getManager.do",
		data:{
			id:$("#loguser").attr("num"),
		},
		type:"POST",
		success:function(data){
			if(data){
				$("#person_form").form('load',{
					id:data.userId,
					username:data.username,
					QQ:data.qq,
					email:data.email,
					phone:data.phone,
				});
			}
			
			
		},
	});
	
});
man_tool={
		edit:function(){
			var per=$("#person_form input");
			$.each(per,function(index,obj){
				if(index>0){
					$(obj).removeAttr('disabled');
				}
				
			});
			form_valid();
		},
		save:function(){
			
			if(!$("#person_form input[name='username']").validatebox("isValid")){
				$("#person_form input[name='username']").focus();
				
				return false;
			}else if(!$("#person_form input[name='QQ']").validatebox("isValid")){
				$("#person_form input[name='QQ']").focus();
				
				return false;
			}else if(!$("#person_form input[name='email']").validatebox("isValid")){
				$("#person_form input[name='email']").focus();
				
				return false;
			}else if(!$("#person_form input[name='phone']").validatebox("isValid")){
				$("#person_form input[name='phone']").focus();
				
				return false;
			}
			
			$.ajax({
				url:APP_PATH+"view/updateManager.do",
				type:"POST",
				data:{
					id:$("#person_form input[name='id']").val(),
					username:$("#person_form input[name='username']").val(),
					QQ:$("#person_form input[name='QQ']").val(),
					email:$("#person_form input[name='email']").val(),
					phone:$("#person_form input[name='phone']").val(),
				},
				success:function(data){
					if(data>0){
						$.messager.show({
							title:'提示',
							msg:'信息修改成功!',
						});
						
						var per=$("#person_form input");
						
						$.each(per,function(index,obj){
							//console.log(obj);
							if(index>0){
								$(obj).attr('disabled',"disabled");
							}
							
						});
					}
				},
			});
		}

}
function form_valid(){
	//alert($("#person_form input[name='QQ']").val());
	//if($("#person_form input[name='username']").val()==''){
		$("#person_form input[name='username']").validatebox({    
		    required: true,    
		    validType: 'nameRule'   
		});  

	//}
	//if($("#person_form input[name='phone']").val()==''){
		$("#person_form input[name='phone']").validatebox({    
		    required: true,    
		    validType: 'Mobile'   
		});  

	//}
	//if($("#person_form input[name='QQ']").val()==''){
		$("#person_form input[name='QQ']").validatebox({    
		    required: true,    
		    validType: 'qq'   
		});  

	//}
	//if($("#person_form input[name='email']").val()==''){
		$("#person_form input[name='email']").validatebox({    
		    required: true,    
		    validType: 'MyEmail'   
		});  

	//}
}
/*function to_Int(){
	var str=$("#lost_edit input[name='postDate']").val();
	return str=="是"?1:0;
}*/