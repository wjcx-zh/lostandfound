var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-12);
$(function(){
	//console.log(APP_PATH+"/login_user.do");
	$.ajax({
		url:APP_PATH+"/login_user.do",
		type:"POST",
		success:function(result){
			console.log(result);
			$("#loguser").text(result.username);
		}
	});
	$("#tabs").tabs({
		fit:true,
		border:false
	});
	$("#nav").tree({
		url:APP_PATH+"/nav_man.do",
		lines:true,
		
		/*onLoadSuccess:function(node,data){
			if(data){
				$(data).each(function(index,value){
					if(this.state=="closed"){
						$("#nav").tree("expandAll");
					}
				});
			}
		},*/
		onClick:function(node){
			console.log(node.url);
			console.log(node);
			if(node.url){
				if($("#tabs").tabs("exists",node.text)){
					$("#tabs").tabs("select",node.text);
				}else{
					$("#tabs").tabs("add",{
						title:node.text,
						closable:true,
						iconCls:node.iconCls,
						href:node.url
					});
				}
			}
		}
	});
	$("#exit").click(function(){
		$.ajax({
			url:APP_PATH+"/exit.do",
			type:"POST",
			success:function(data){
				
				location.href=APP_PATH+"/login.html";
				
			},
		});
	});
	
});