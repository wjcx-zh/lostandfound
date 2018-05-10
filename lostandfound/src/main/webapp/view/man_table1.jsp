<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    

<script type="text/javascript" src="js/man_table1.js"></script>
<table id="man_table"></table>
<div id="man_tool">
	<div>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_m.add()">添加</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_m.edit()">修改</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_m.remove()">删除</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_m.search()">查询</a>
	</div>
</div>

<form id="man_add" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p>用户账号:<input type="text" name="manager"  class="textbox" style="width:200px"/></p>
	<p>用户密码:<input type="password" name="password" class="textbox" style="width:200px"/></p>
</form>

<form id="man_edit" style="margin:0;padding:5px 0 0 25px;color:#333">
	<input type="hidden" name="id" class="textbox" style="width:200px"/>
	<p><label style="width:80px;display:inline-block">管理员账号:</label><input type="text" name="manager" class="textbox" style="width:200px"/></p>
	<p><label style="width:80px;display:inline-block">QQ:</label><input type="text" name="QQ" class="textbox" style="width:200px"/></p>
	<p><label style="width:80px;display:inline-block">email:</label><input type="text" name="email" class="textbox" style="width:200px"/></p>
	<p><label style="width:80px;display:inline-block">phone:</label><input type="text" name="phone" class="textbox" style="width:200px"/></p>
	
</form>
<form id="info_query_m" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p style="margin-bottom: 10px;"><label for="username" style="display:inline-block;width:60px;">物品名称:</label><input type="text" name="username"  class="textbox" style="width:150px;height:24px;;"/></p>
	<p style="margin-bottom: 10px;"><label for="phone" style="display:inline-block;width:60px;">手机号码:</label><input   name="phone" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	
	
</form> 
