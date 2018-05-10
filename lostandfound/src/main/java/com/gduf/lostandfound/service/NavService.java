package com.gduf.lostandfound.service;


import java.util.List;

import com.gduf.lostandfound.dao.NavDao;
import com.gduf.lostandfound.model.Navigator;

public class NavService {
	
	private NavDao navDao;
	
	public NavDao getNavDao() {
		return navDao;
	}

	public void setNavDao(NavDao navDao) {
		this.navDao = navDao;
	}

	public List<Navigator> showNav(String id) {
		// TODO Auto-generated method stub
		//List<Navigator> navList=new ArrayList<Navigator>();
		int Id=0;
		if(id!=null&&id!=""){
			Id=Integer.parseInt(id);
		}
		//System.out.println(Id);
		//System.out.println(navDao.selectNavInfo(Id));
		return navDao.selectNavInfo(Id);
	}

}
