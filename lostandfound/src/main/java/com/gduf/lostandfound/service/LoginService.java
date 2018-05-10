package com.gduf.lostandfound.service;





import org.springframework.ui.ModelMap;

import com.gduf.lostandfound.dao.LoginDao;
import com.gduf.lostandfound.model.User;

public class LoginService {
	
	private LoginDao loginDao;
	private boolean flag;
	public LoginDao getLoginDao() {
		return loginDao;
	}
	public void setLoginDao(LoginDao loginDao) {
		this.loginDao = loginDao;
	}
	public boolean getFlag() {
		return flag;
	}
	public void setFlag(boolean flag) {
		this.flag = flag;
	}
	public boolean ifExists(User user) {
		// TODO Auto-generated method stub
		
		if(loginDao.selectUser(user)!=null){
			user.setUserId(loginDao.selectUser(user).getUserId());
			return true;
		} 
		return false;
	}
	public String actionView(User user,ModelMap map){
		
		String result=null;
		/*if(map.containsAttribute("user")||map.containsAttribute("manager")){
			flag=true;
		}*/
		
		if(ifExists(user)){
			//tempUser=user;
			System.out.println(user);
			if(user.getRole()==1){
				map.addAttribute("manager", user);
				result="/manager.jsp";
				//result="manager";
			}else if(user.getRole()==2){
				map.addAttribute("user", user);
				result="/index.jsp";
				//result="index";
			}else{
				result="/error/notUser.jsp";
				//result="notUser";
			}
			return result;
		}
		//tempUser=null;
		flag=false;
		result="/error/notUser.jsp";
		//result="notUser";
		return result;
	}
	
}
