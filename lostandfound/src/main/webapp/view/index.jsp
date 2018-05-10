<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>失物招领首页</title>
<link type="text/css" rel="stylesheet" href="/lostandfound/view/static/easyui/themes/default/easyui.css"/>
<link type="text/css" rel="stylesheet" href="/lostandfound/view/static/easyui/themes/icon.css"/>
<link type="text/css" rel="stylesheet" href="/lostandfound/view/css/index.css"/>
</head>
<body>
	<div id="con" class="easyui-layout" >   
	    <div data-options="region:'north',title:'Lost-And-Found Center',noheader:true" style="height:130px;" class="header">
	    	<div id="bgimg">
	    		<div class="logo" >失物招领首页</div>
	    	</div>
	    	<ul id="nav">
	    		<li><a href="/lostandfound/view/index.jsp">首页</a></li>
	    		<li><a href="javascript:void(0);" id="lost_a">报失</a></li>
	    		<li><a href="javascript:void(0);" id="find_a">招领</a></li>
	    		<li><a href="javascript:void(0);" id="query_a">信息查询</a></li>
	    		<li><a href="javascript:void(0);">关于</a></li>
	    		
	    		<li id='show'><span id="loguser">欢迎,${sessionScope.user.username}</span></li>
	    	</ul>
	    </div>   
	      
	    <div id="center" data-options="region:'center',title:'center title',noheader:true" style="padding:5px;background:#eee;">
	    	<div id="lostInfo" >
	    		<h4>失物信息</h4>
	    		<ul id="dl" name="ldl"></ul>	
	    		<div id="page" name="lp" style="width:500px"></div>
	    	</div>
	    	<div id="foundInfo">
	    		<h4>招领信息</h4>
	    		<ul id="dln" name="fdl"></ul>	
	    		<div id="fpage" name="fp" style="width:500px"></div>
	    	</div>
	    </div> 
	    <div data-options="region:'south',title:'South Title',split:false,noheader:true" style="height:35px;line-height:30px;text-align:center">
	    	&copy;wjcx 软工设计各领风骚小组【zhl,sjw,cjd,cyt,yzw】携手设计
	    </div>   
	</div> 
	<form id="lost_add" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p>物品名称:<input type="text" name="lostName"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px"/></p>
	<p>遗失地点:<input type="text" name="lostPlace"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px"/></p>
	<p>遗失时间:<input type="text" name="lostTime" class="textbox easyui-validatebox" data-options="required:true" style="width:200px"/></p>
	<p>失者名称:<input type="text" name="losserName"  class="textbox easyui-validatebox" data-options="required:true,validType:'nameRule'" style="width:200px"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox easyui-validatebox" data-options="required:true,validType:'contact'" style="width:200px"/></p>
	
</form>  
<form id="found_add" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p>物品名称:<input type="text" name="findName"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px"/></p>
	<p>捡拾地点:<input type="text" name="findPlace"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px"/></p>
	<p>捡拾时间:<input type="text" name="findTime" class="textbox easyui-validatebox" data-options="required:true" style="width:200px"/></p>
	<p>拾者名称:<input type="text" name="finderName"  class="textbox easyui-validatebox" data-options="required:true,validType:'nameRule'" style="width:200px"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox easyui-validatebox" data-options="required:true,validType:'contact'" style="width:200px"/></p>
	<p>领取地点:<input type="text" name="storePlace" class="textbox" style="width:200px"/></p>
</form>

<form id="info_query" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p><label for="goodsName">物品名称:</label><input type="text" name="goodsName"  class="textbox" style="width:150px;height:24px;;"/></p>
	<p><label for="from">查找时间从</label><input  id="from" name="from" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	<p><label for="to">到</label><input  id="to" name="to" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	
</form>  
<form id="lost_info" style="margin:0;padding:5px 0 0 25px;color:#333">
	<input type="hidden" name="id" class="textbox" style="width:200px"/>
	<p>物品名称:<input type="text" name="lostName"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px;border:none" disabled="disabled"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	<p>遗失地点:<input type="text" name="lostPlace"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px;border:none" disabled="disabled"/></p>
	<p>遗失时间:<input type="text" name="lostTime" class="textbox easyui-validatebox" data-options="required:true" style="width:200px;border:none" disabled="disabled"/></p>
	<p>失者名称:<input type="text" name="losserName"  class="textbox easyui-validatebox" data-options="required:true,validType:'nameRule'" style="width:200px;border:none" disabled="disabled"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox easyui-validatebox" data-options="required:true,validType:'contact'" style="width:200px;border:none" disabled="disabled"/></p>
	<p>报失日期:<input type="text" name="postDate"  class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	<p>已找回?:<input type="text" name="hasFound" class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	
</form>
<form id="found_info" style="margin:0;padding:5px 0 0 25px;color:#333">
	<input type="hidden" name="id" class="textbox" style="width:200px"/>
	<p>物品名称:<input type="text" name="findName"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px;border:none" disabled="disabled"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	<p>捡拾地点:<input type="text" name="findPlace"  class="textbox easyui-validatebox" data-options="required:true" style="width:200px;border:none" disabled="disabled"/></p>
	<p>捡拾时间:<input type="text" name="findTime" class="textbox easyui-validatebox" data-options="required:true" style="width:200px;border:none" disabled="disabled"/></p>
	<p>拾者名称:<input type="text" name="finderName"  class="textbox easyui-validatebox" data-options="required:true,validType:'nameRule'" style="width:200px;border:none" disabled="disabled"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox easyui-validatebox" data-options="required:true,validType:'contact'" style="width:200px;border:none" disabled="disabled"/></p>
	<p>领取地点:<input type="text" name="storePlace" class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	<p>发布日期:<input type="text" name="storeDate" class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	<p>被领取?:<input type="text" name="hasReturn" class="textbox" style="width:200px;border:none" disabled="disabled"/></p>
	
</form>
<script type="text/javascript" src="/lostandfound/view/static/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/lostandfound/view/static/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="/lostandfound/view/static/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="/lostandfound/view/js/index.js"></script>
<script type="text/javascript" src="/lostandfound/view/js/validate.js"></script>
<script type="text/javascript">
	
	function showInfos(aId,pid){
		//var ad=$("#"+pid+aId+);
		//console.log(ad);
		var ele,str;
		if(ifContains(pid,"lost")){
			ele=$("#lost_info");
			str="lost";
		}else if(ifContains(pid,"found")){
			ele=$("#found_info");
			str="found";
		}
		setAtr(aId,pid);
		$.ajax({
			url:"/lostandfound/view/singleInfo_query.do",
			type:"POST",
			data:{
				id:aId,
				choose:str,
			},
			
			beforeSend:function(){
					$.messager.progress({
						text:'数据获取中....',
					});
			},
			success:function(data,response,status){
				$.messager.progress('close');
				//console.log(data+"ssss");
				if(data){
					if(ifContains(pid,"lost")){
						$(ele).form('load',{
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
					}else if(ifContains(pid,"found")){
						$(ele).form('load',{
							id:data.findId,
							findName:data.findName,
							trait:data.trait,
							findPlace:data.findPlace,
							findTime:new Date(data.findTime).toLocaleString(),
							finderName:data.finderName,
							contact:data.contact,
							storeDate:new Date(data.storeDate).toLocaleString(),
							storePlace:data.storePlace,
							hasReturn:data.hasReturn,
						}).dialog('open');
					}
					
				}else{
					$.messager.alert('数据获取失败!','未知错误导致失败,请重试!','warning');
				}
		}
	});
		//$(ele).dialog('open');
}
</script>

</body>

</html>
