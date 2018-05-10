package com.gduf.lostandfound.convert;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

import org.springframework.core.convert.converter.Converter;

public class MyDateConverter implements Converter<String,Date>{

	@Override
	public Date convert(String source) {
		// TODO Auto-generated method stub
		if(source!=null&& !"".equals(source.trim())){
			
			try {
				SimpleDateFormat sdf=getSimpleDateFormat(source);
				return sdf.parse(source);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return null;
	}
	
	//日期格式的匹配
	private SimpleDateFormat getSimpleDateFormat(String source){
		SimpleDateFormat sdf=new SimpleDateFormat();
		if(Pattern.matches("^\\d{4}-\\d{2}-\\d{2}$", source)){
			sdf=new SimpleDateFormat("yyyy-MM-dd");
		}else if(Pattern.matches("^\\d{4}/\\d{2}/\\d{2}$", source)){
			sdf=new SimpleDateFormat("yyyy/MM/dd");
		}else if(Pattern.matches("^\\d{4}\\d{2}\\d{2}$", source)){
			sdf=new SimpleDateFormat("yyyyMMdd");
		}
		
		return sdf;
	}
	
}
