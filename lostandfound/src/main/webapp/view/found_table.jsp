<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<script type="text/javascript" src="js/found_table.js"></script>
<table id="found_table"></table>
<div id="man_tool_f">
	<div>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_f.add()">添加</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_f.edit()">修改</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_f.remove()">删除</a>
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool_f.search()">查询</a>
	</div>
</div>

<form id="found_add" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p>物品名称:<input type="text" name="findName"  class="textbox" style="width:200px"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px"/></p>
	<p>捡拾地点:<input type="text" name="findPlace"  class="textbox" style="width:200px"/></p>
	<p>捡拾时间:<input type="text" name="findTime" class="textbox" style="width:200px"/></p>
	<p>拾者名称:<input type="text" name="finderName"  class="textbox" style="width:200px"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox" style="width:200px"/></p>
	<p>领取地点:<input type="text" name="storePlace" class="textbox" style="width:200px"/></p>
</form>

<form id="found_edit" style="margin:0;padding:5px 0 0 25px;color:#333">
	<input type="hidden" name="id" class="textbox" style="width:200px"/>
	<p>物品名称:<input type="text" name="findName"  class="textbox" style="width:200px"/></p>
	<p>物品特征:<input type="text" name="trait" class="textbox" style="width:200px"/></p>
	<p>捡拾地点:<input type="text" name="findPlace"  class="textbox" style="width:200px"/></p>
	<p>捡拾时间:<input type="text" name="findTime" class="textbox" style="width:200px"/></p>
	<p>拾者名称:<input type="text" name="finderName"  class="textbox" style="width:200px"/></p>
	<p>联系方式:<input type="text" name="contact" class="textbox" style="width:200px"/></p>
	<p>领取地点:<input type="text" name="storePlace" class="textbox" style="width:200px"/></p>
	<p>发布日期:<input type="text" name="storeDate" class="textbox" style="width:200px"/></p>
	<p>被领取?:<input type="text" name="hasReturn" class="textbox" style="width:200px"/></p>
	
</form>
<form id="info_query_f" style="margin:0;padding:5px 0 0 25px;color:#333">
	<p style="margin-bottom: 10px;"><label for="goodsName" style="display:inline-block;width:60px;">物品名称:</label><input type="text" name="goodsName"  class="textbox" style="width:150px;height:24px;;"/></p>
	<p style="margin-bottom: 10px;"><label for="from" style="display:inline-block;width:60px;">查找时间从</label><input  id="from" name="from" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	<p style="margin-bottom: 10px;"><label for="to" style="display:inline-block;width:60px;">到</label><input  id="to" name="to" type= "text" class= "easyui-datebox" style="width:150px;" /></p>
	
</form> 
<script type="text/javascript" src="/lostandfound/view/js/validate.js"></script>