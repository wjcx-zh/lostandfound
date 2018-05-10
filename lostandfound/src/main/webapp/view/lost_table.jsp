<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<script type="text/javascript" src="js/lost_table.js"></script>
<table id="lost_table"></table>
<div id="man_tool_l">
	<div>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_l.add()">添加</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_l.edit()">修改</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_l.remove()">删除</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_l.search()">查询</a>
	</div>
</div>

<form id="lost_add" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p>物品名称:<input type="text" name="lostName"  class="textbox" style="width:200px"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px"/></p>
	<p>遗失地点:<input type="text" name="lostPlace"  class="textbox" style="width:200px"/></p>
	<p>遗失时间:<input type="text" name="lostTime" class="textbox" style="width:200px"/></p>
	<p>失者名称:<input type="text" name="losserName"  class="textbox" style="width:200px"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox" style="width:200px"/></p>
</form>

<form id="lost_edit" style="margin:0;padding:5px 0 0 25px;color:#333">
	<input type="hidden" name="id" class="textbox" style="width:200px"/>
	<p>物品名称:<input type="text" name="lostName"  class="textbox" style="width:200px"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px"/></p>
	<p>遗失地点:<input type="text" name="lostPlace"  class="textbox" style="width:200px"/></p>
	<p>遗失时间:<input type="text" name="lostTime" class="textbox" style="width:200px"/></p>
	<p>失者名称:<input type="text" name="losserName"  class="textbox" style="width:200px"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox" style="width:200px"/></p>
	<p>报失日期:<input type="text" name="postDate"  class="textbox" style="width:200px"/></p>
	<p>已找回?:<input type="text" name="hasFound" class="textbox" style="width:200px"/></p>
	
</form>
<form id="info_query_l" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p style="margin-bottom: 10px;"><label for="goodsName" style="display:inline-block;width:60px;">物品名称:</label><input type="text" name="goodsName"  class="textbox" style="width:150px;height:24px;;"/></p>
	<p style="margin-bottom: 10px;"><label for="from" style="display:inline-block;width:60px;">查找时间从</label><input  id="from" name="from" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	<p style="margin-bottom: 10px;"><label for="to" style="display:inline-block;width:60px;">到</label><input  id="to" name="to" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	
</form> 
<script type="text/javascript" src="/lostandfound/view/js/validate.js"></script>
