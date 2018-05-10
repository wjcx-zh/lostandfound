<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Lost-And-Found</title>
<script type="text/javascript" src="static/easyui/jquery.min.js"></script>
<script type="text/javascript" src="static/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="static/easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="js/manager.js"></script>
<link type="text/css" rel="stylesheet" href="static/easyui/themes/default/easyui.css"/>
<link type="text/css" rel="stylesheet" href="static/easyui/themes/icon.css"/>
<link type="text/css" rel="stylesheet" href="css/manager.css"/>

</head>
<body>
	<div id="cc" class="easyui-layout" >   
	    <div data-options="region:'north',title:'Lost-And-Found Center',noheader:true" style="height:100px;" class="header">
	    	<div class="logo" >后台管理</div>
	    	<div class="logout">您好,<span id="loguser" num="${sessionScope.manager.userId }">${sessionScope.manager.username }</span>|<a href="javascript:void(0);" id="exit">退出</a></div>
	    </div>   
	    <div data-options="region:'south',title:'footer',noheader:true" style="height:35px;line-height:30px;text-align:center">
	    	&copy;wjcx 设计
	    </div>   
	    <div data-options="region:'west',title:'导航'" style="width:180px;padding:10px">
	    	<ul id="nav">
	    		
	    	</ul>
	    </div>   
	    <div data-options="region:'center'" style="overflow:hidden" >
	    	<div id="tabs" class="easyui-tabs" style="border:none">
	    	
	    	</div>
	    </div>   
	</div>   
</body>
</html>