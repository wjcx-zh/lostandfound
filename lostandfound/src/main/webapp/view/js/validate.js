//扩展easyui表单的验证  
    $.extend($.fn.validatebox.defaults.rules, {  
        //验证汉字  
        CHS: {  
            validator: function (value) {  
                return /^[\u0391-\uFFE5]+$/.test(value);  
            },  
            message: '仅允许输入中文字符.'  
        },  
        //移动手机号码验证  
        Mobile: {//value值为文本框中的值  
            validator: function (value) {  
                var reg = /^1[3|4|5|8|9]\d{9}$/;  
                return reg.test(value);  
            },  
            message: '请输入正确的手机号.'  
        },  
        //国内邮编验证  
        ZipCode: {  
            validator: function (value) {  
                var reg = /^[0-9]\d{5}$/;  
                return reg.test(value);  
            },  
            message: '邮政编码必须为6位数字'  
        },  
      //数字  
        Number: {  
            validator: function (value) {  
                var reg =/^[0-9]*$/;  
                return reg.test(value);  
            },  
            message: '仅允许输入数字.'  
        },
        //邮箱
        MyEmail:{
        	validator:function(value){
        	   	var regEmail=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        	   	return regEmail.test(value);
        	},
        	message:'请输入正确的邮箱格式',
        },
        qq:{
        	validator:function(value){
        		var regQQ=/^[1-9]\d{4,14}$/;
        		return regQQ.test(value);
        	},
        	message:'请输入正确的qq号码'
        },
        nameRule:{
        	validator:function(value){
        		var regName=/(^[a-z0-9A-Z_-]{4,16}$)|(^[\u2E80-\u9FFF]{2,5}$)/;
        		return regName.test(value);
        	},
        	message:'名称可以是2-5位中文或4-16为英文数字的组合'
        },
        passRule:{
        	validator:function(value){
        		var regPass=/^[a-z0-9A-Z_-]{4,20}$/;
        		return regPass.test(value);
        	},
        	message:'密码可以是4-20位数字字母的组合'
        },
        contact:{
        	validator:function(value){
        		var regContact=/(^[1-9]\d{4,14}$)|(^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$)|(^1[3|4|5|8|9]\d{9}$)/
        		return regContact.test(value);
        	},
        	message:'请输入正确格式，可以是手机号，qq和邮箱'
        }
    })  