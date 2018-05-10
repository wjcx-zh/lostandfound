package com.gduf.lostandfound.service;


import java.util.List;


import com.gduf.lostandfound.dao.ManagerDao;
import com.gduf.lostandfound.model.DataSet;
import com.gduf.lostandfound.model.User;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

public class ManagerService {
	private ManagerDao managerDao;

	public ManagerDao getManagerDao() {
		return managerDao;
	}

	public void setManagerDao(ManagerDao managerDao) {
		this.managerDao = managerDao;
	}
	
	public DataSet findManager(int page,int rows,String order,String sort){
		
		//int first=rows*(page-1);
		PageHelper.startPage(page, rows);
		List<User> lists=managerDao.selectManager();
		DataSet dataSet=new DataSet();
		dataSet.setRows(lists);
		PageInfo<User> pageInfo=new PageInfo<User>(lists);
		dataSet.setTotal(pageInfo.getTotal());
		
		return dataSet;
	}

	public void addManager(String manager, String password) {
		// TODO Auto-generated method stub
		User user=new User();
		user.setPassword(password);
		user.setUsername(manager);
		user.setRole(1);
		managerDao.insertManager(user);
	}
}
