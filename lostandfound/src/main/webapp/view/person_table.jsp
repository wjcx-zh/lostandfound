<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="js/person_table.js"></script>

<div id="man_tool_p" >
	<div style="backgroud-color:#E0ECFF;">
		
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool.edit()">修改</a>
		
		<a href="javascript:void(0);" class="easyui-linkbutton" plain="true" onclick="man_tool.save()">保存</a>
	</div>
</div>

<form id="person_form" >
	<p style="margin:20px 200px;"><label for="id" style="display:inline-block;width:60px;">编号:</label><input type="text" name="id"  class="textbox" style="width:200px"/></p>
	<p style="margin:20px 200px;"><label for="username" style="display:inline-block;width:60px;">用户名称:</label><input type="text" name="username"  class="textbox" style="width:200px"/></p>
	<p style="margin:20px 200px;"><label for="QQ" style="display:inline-block;width:60px;">QQ:</label><input type="text" name="QQ"  class="textbox" style="width:200px"/></p>
	<p style="margin:20px 200px;"><label for="email" style="display:inline-block;width:60px;">电子邮箱:</label><input type="text" name="email"  class="textbox" style="width:200px"/></p>
	<p style="margin:20px 200px;"><label for="phone" style="display:inline-block;width:60px;">联系方式:</label><input type="text" name="phone"  class="textbox" style="width:200px"/></p>
	
</form>
<script type="text/javascript" src="/lostandfound/view/js/validate.js"></script>