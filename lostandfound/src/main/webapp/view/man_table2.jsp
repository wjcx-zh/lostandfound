<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="js/man_table2.js"></script>
<table id="man_table2"></table>
<div id="man_tool2">
	<div>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_u.add()">添加</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_u.edit()">修改</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_u.remove()">删除</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_u.search()">查询</a>
	</div>
</div>

<form id="man_add2" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p>用户账号:<input type="text" name="manager"  class="textbox" style="width:200px"/></p>
	<p>用户密码:<input type="password" name="password" class="textbox" style="width:200px"/></p>
</form>

<form id="man_edit2" style="margin:0;padding:5px 0 0 25px;color:#333">
	<input type="hidden" name="id" class="textbox" style="width:200px"/>
	<p><label style="width:80px;display:inline-block">用户账号:</label><input type="text" name="manager" class="textbox" style="width:200px"/></p>
	<p><label style="width:80px;display:inline-block">QQ:</label><input type="text" name="QQ" class="textbox" style="width:200px"/></p>
	<p><label style="width:80px;display:inline-block">email:</label><input type="text" name="email" class="textbox" style="width:200px"/></p>
	<p><label style="width:80px;display:inline-block">phone:</label><input type="text" name="phone" class="textbox" style="width:200px"/></p>
	
</form>
<form id="info_query_u" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p><label for="username">物品名称:</label><input type="text" name="username"  class="textbox" style="width:150px;height:24px;;"/></p>
	<p><label for="phone">手机号码:</label><input   name="phone" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	
	
</form> 
