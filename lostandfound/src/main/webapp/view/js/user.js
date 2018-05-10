var APP_PATH=window.location.href;
var path_length=APP_PATH.length;
APP_PATH=APP_PATH.substring(0,path_length-12);
$(function(){
	//console.log(APP_PATH+"/login_user.do");
	$.ajax({
		url:"/lostandfound/view/login_user.do",
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
	$("#pmsg").click(function(){
		tagsInfo($("#pmsg"));
	});
	$("#lmsg").click(function(){
		tagsInfo($("#lmsg"));
	});
	$("#fmsg").click(function(){
		tagsInfo($("#fmsg"));
	});
	$("#exit").click(function(){
		$.ajax({
			url:"/lostandfound/view/exit.do",
			type:"POST",
			success:function(data){
				
				location.href="/lostandfound/view/login.html";
				
			},
		});
	});
	
});

//信息展示
function tagsInfo(ele){
	$(ele).click(function(){
		var url;
		console.log(ele);
		var str=ele.attr("id");
		console.log(str);
		if(ifContains(str,"p")){
			url="person_table.jsp";
		}else if(ifContains(str,"l")){
			url="lost_table.jsp";
		}else if(ifContains(str,"f")){
			url="found_table.jsp";
		}
		if(url){
			if($("#tabs").tabs("exists",$(ele).text())){
				$("#tabs").tabs("select",$(ele).text());
			}else{
				$("#tabs").tabs("add",{
					title:$(ele).text(),
					closable:true,
					//iconCls:n,
					href:url
				});
			}
		}
	});
}

//字符串包含
function ifContains(str,subStr){
	//console.log(str.indexOf(subStr));
	return str.indexOf(subStr)>=0;
}

//统一日期格式
Date.prototype.toLocaleString=function(){
	return this.getFullYear()+"年"+(this.getMonth()+1)+"月"+this.getDate()+"日";
}