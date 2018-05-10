package com.gduf.lostandfound.service;


import java.util.ArrayList;
import java.util.List;


import com.gduf.lostandfound.dao.UserDao;
import com.gduf.lostandfound.model.DataSet;
import com.gduf.lostandfound.model.User;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

public class UserService {
	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	public DataSet findUser(int page,int rows,String order,String sort,int role){
		
		//int first=rows*(page-1);
		PageHelper.startPage(page, rows);
		List<User> lists=userDao.selectUserByRole(role);
		DataSet dataSet=new DataSet();
		dataSet.setRows(lists);
		PageInfo<User> pageInfo=new PageInfo<User>(lists);
		dataSet.setTotal(pageInfo.getTotal());
		
		return dataSet;
	}
	
public DataSet findUserByQuery(int page,int rows,String username,String phone,int role){
		User user=new User();
		user.setUsername(username);
		user.setPhone(phone);
		user.setRole(role);
		//int first=rows*(page-1);
		PageHelper.startPage(page, rows);
		List<User> lists=userDao.selectUserByCondition(user);
		DataSet dataSet=new DataSet();
		dataSet.setRows(lists);
		PageInfo<User> pageInfo=new PageInfo<User>(lists);
		dataSet.setTotal(pageInfo.getTotal());
		
		return dataSet;
	}

	public int addUser(String manager, String password,int role) {
		// TODO Auto-generated method stub
		User user=new User();
		user.setPassword(password);
		user.setUsername(manager);
		user.setRole(role);
		return userDao.insertUser(user);
	}

	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		return userDao.selectUserById(id);
	}

	public int updateUser(Integer id, String username, String QQ, String email, String phone) {
		// TODO Auto-generated method stub
		User user=new User();
		user.setEmail(email);
		user.setPhone(phone);
		user.setQQ(QQ);
		user.setUsername(username);
		user.setUserId(id);
		System.out.println(userDao.updateUser(user));
		return userDao.updateUser(user);
	}

	public int removeUser(String ids) {
		// TODO Auto-generated method stub
		List<Integer> list=new ArrayList<Integer>();
		for(String str:ids.split(",")){
			list.add(Integer.parseInt(str));
		}
		
		return userDao.deleteUserInIds(list);
	}
}
