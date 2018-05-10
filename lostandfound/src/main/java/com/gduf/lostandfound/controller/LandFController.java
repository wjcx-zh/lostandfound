package com.gduf.lostandfound.controller;




import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gduf.lostandfound.model.DataSet;
import com.gduf.lostandfound.model.FoundInfo;
import com.gduf.lostandfound.model.LostInfo;
import com.gduf.lostandfound.model.User;
import com.gduf.lostandfound.service.FoundService;
import com.gduf.lostandfound.service.LoginService;
import com.gduf.lostandfound.service.LostService;
import com.gduf.lostandfound.service.NavService;
import com.gduf.lostandfound.service.UserService;
import com.gduf.lostandfound.vo.GoodsInfo;


@Controller
@SessionAttributes({"manager","user"})
public class LandFController {
	
	
	private LoginService loginService;
	private NavService navService;
	private UserService userService;
	private LostService lostService;
	private FoundService foundService;
	private static List<String> cookies;
	private String  reqCookie;
	private ModelMap modelMap;
	static{
		cookies=new ArrayList<String>();
	}
	
	/**
	 * @author WJCX
	 * 系统登录处理
	 * */
	@RequestMapping("/view/login.do")
	@ResponseBody
	public Object doLogin(String username,String password,String role,ModelMap map,HttpServletRequest request){
		int roleId=Integer.parseInt(role);
		System.out.println(username);
		System.out.println(password);
		System.out.println(role);
		reqCookie=request.getHeader("Cookie");
		cookies.add(reqCookie);
		modelMap=map;
		//System.out.println(request.getSession().getId());
		User user=new User(username,password,roleId);
		
		return loginService.actionView(user,map);
	}
	
	
	
	
	
	@RequestMapping("/view/exit.do")
	@ResponseBody
	public Object doExit(){
		
		if(modelMap.containsAttribute("user")){
			modelMap.remove("user");
		}
		if(modelMap.containsAttribute("manager")){
			modelMap.remove("manager");
		}
		loginService.setFlag(false);
		cookies.remove(reqCookie);
		return "/view/login.html";
	}
	
	/**
	 * @author WJCX
	 * 登陆身份的获取
	 * */
	@RequestMapping("/view/login_user.do")
	@ResponseBody
	public Object doLoguser(){
		int count=0;
		if(cookies==null){
			loginService.setFlag(false);
			//cookies.add(reqCookie);
		}else{
			for(String cookie:cookies){
				if(cookie.equals(reqCookie)){
					loginService.setFlag(true);
					break;
				}
				loginService.setFlag(false);
				count++;
				//cookies.add(reqCookie);
			}
			/*if(count==cookies.size()){
				modelMap.remove("user");
				modelMap.remove("manager");
			}*/
		}
		System.out.println(loginService.getFlag());
		return loginService.getFlag();
	}

	/**
	 * @author WJCX
	 * 导航树
	 * */
	@RequestMapping("/view/nav_man.do")
	@ResponseBody
	public Object doNav(String id){
		
		return navService.showNav(id);
	}
	
	/**
	 * @author WJCX
	 * 
	 * 
	 * */
	@RequestMapping("/view/man_table1.do")
	@ResponseBody
	public Object doMan_Table1(int page,int rows,String order,String sort,String username,String phone){
		if(username!=null || phone!=null){
			return userService.findUserByQuery(page, rows, username, phone, 1);
		}
		return userService.findUser(page, rows, order, sort,1);
	}
	
	/**
	 * @author WJCX
	 * 
	 * 
	 * */
	@RequestMapping("/view/man_table2.do")
	@ResponseBody
	public Object doMan_Table2(int page,int rows,String order,String sort,String username,String phone){
		if(username!=null||phone!=null){
			return userService.findUserByQuery(page, rows, username, phone, 2);
		}else{
			return userService.findUser(page, rows, order, sort,2);
		}
		
	}
	
	/**
	 * @author WJCX
	 * 
	 * 获取管理员数据
	 * */
	@RequestMapping("/view/getManager.do")
	@ResponseBody
	public Object doGetManager(Integer id){
		
		return userService.getUserById(id);
	}
	
	/**
	 * @author WJCX
	 * 
	 * 修改管理员信息
	 * */
	@RequestMapping("/view/updateManager.do")
	@ResponseBody
	public Object doUpdateManager(Integer id,String username,String QQ,String email,String phone){
		
		return userService.updateUser(id,username,QQ,email,phone);
	}
	
	
	/**
	 * @author WJCX
	 * 添加管理员
	 * */
	@RequestMapping("/view/man_add.do")
	@ResponseBody
	public Object doManAdd(String manager,String password,int role){
		return userService.addUser(manager,password,role);
		
		//return null;
	}
	
	/**
	 * @author WJCX
	 * 
	 * 删除管理员信息
	 * */
	@RequestMapping("/view/deleteManager.do")
	@ResponseBody
	public Object doDeleteManager(String ids){
		
		return userService.removeUser(ids);
		
	}
	@RequestMapping("/view/lostInfo.do")
	@ResponseBody
	public Object doLost(String username,Date from,Date to,Integer page,Integer rows){
		//System.out.println(page);
		if(username!=null||from!=null||to!=null){
			GoodsInfo goods=new GoodsInfo(username,from,to);
			return lostService.queryInfoByConditions(goods, page, rows);
		}else{
			return lostService.queryAllInfo(page,rows);
		}
		
	}
	
	@RequestMapping("/view/lost_add.do")
	@ResponseBody
	public Object doLostInfoAdd(String lostName,String trait,String lostPlace,Date lostTime,String losserName,String contact){
		Date postDate=new Date();
		//System.out.println(postDate);
		LostInfo info=new LostInfo(lostName, trait, lostPlace, lostTime, losserName, contact, postDate);
		
		return lostService.addLostInfo(info);
	}
	
	@RequestMapping("/view/found_add.do")
	@ResponseBody
	public Object doFoundInfoAdd(String findName,String trait,String findPlace,Date findTime,String finderName,String contact,String storePlace){
		Date storeDate=new Date();
		//System.out.println(postDate);
		FoundInfo info=new FoundInfo(findName, trait, findPlace, findTime, finderName, contact, storePlace, storeDate);
		
		return foundService.addFoundInfo(info);
	}
	
	@RequestMapping("/view/foundInfo.do")
	@ResponseBody
	public Object doFoundInfo(String username,Date from,Date to,Integer page,Integer rows){
		//System.out.println(page);
		if(username!=null||from!=null||to!=null){
			GoodsInfo goods=new GoodsInfo(username,from,to);
			return foundService.queryInfoByConditions(goods, page,rows);
		}else{
			return foundService.queryAllInfo(page,rows);
		}
		
	}
	
	@RequestMapping("/view/info_query.do")
	@ResponseBody
	public Object doQueryInfo(String goodsName,Date from,Date to,Integer pn,Integer pageSize){
		//SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		//String dateFrom=formatter.format(from);
		//String dateTo=formatter.format(to);
		GoodsInfo goods=new GoodsInfo(goodsName, from,to);
		//System.out.println(goods.getDateFrom());
		Map<String,DataSet> infoMap=new HashMap<String,DataSet>();
		DataSet lostInfoSet=lostService.queryInfoByConditions(goods,pn,pageSize);
		DataSet foundInfoSet=foundService.queryInfoByConditions(goods,pn,pageSize);
		infoMap.put("lostInfo", lostInfoSet);
		infoMap.put("foundInfo", foundInfoSet);
		return infoMap;
		
	}
	
	/**
	 * @author WJCX
	 * 查询单挑记录
	 * */
	@RequestMapping("/view/querySingleLostInfo.do")
	@ResponseBody
	public Object querySingleLostInfo(Integer id){
		return lostService.querySingleInfoById(id);
	}
	
	/**
	 * @author WJCX
	 * 查询单挑记录
	 * */
	@RequestMapping("/view/querySingleFoundInfo.do")
	@ResponseBody
	public Object querySingleFoundInfo(Integer id){
		return foundService.querySingleInfoById(id);
	}
	
	/**
	 * @author WJCX
	 * 修改记录
	 * */
	@RequestMapping("/view/updateLostInfo.do")
	@ResponseBody
	public Object doUpdateLostInfo(Integer lostId,String lostName,String trait,String lostPlace,Date lostTime,String losserName,String contact,Date postDate,int hasFound){
		LostInfo info=new LostInfo(lostName, trait, lostPlace, lostTime, losserName, contact, postDate);
		info.setLostId(lostId);info.setHasFound(hasFound);
		System.out.println(info);
		return lostService.updateSingleInfoById(info);
	}
	
	@RequestMapping("/view/updateFoundInfo.do")
	@ResponseBody
	public Object doUpdateFoundInfo(Integer findId,String findName,String trait,String findPlace,Date findTime,String finderName,String contact,String storePlace,Date storeDate,int hasReturn){
		FoundInfo info=new FoundInfo(findName, trait, findPlace, findTime, finderName, contact, storePlace, storeDate);
		info.setFindId(findId);info.setHasReturn(hasReturn);
		System.out.println(info);
		return foundService.updateSingleInfoById(info);
	}
	
	/**
	 * @author WJCX
	 * 删除记录
	 * */
	@RequestMapping("/view/deleteLostInfo.do")
	@ResponseBody
	public Object doDropLostInfo(String ids){
		
		return lostService.dropInfoInIds(ids);
	}
	
	@RequestMapping("/view/deleteFoundInfo.do")
	@ResponseBody
	public Object doDropFoundInfo(String ids){
		
		return foundService.dropInfoInIds(ids);
	}
	
	@RequestMapping("/view/singleInfo_query.do")
	@ResponseBody
	public Object doQuerySingleInfo(Integer id,String choose){
		//System.out.println("cho:"+choose);
		if(choose.equals("lost")){
			//System.out.println(lostService.querySingleInfoById(id));
			return lostService.querySingleInfoById(id);
			
		}
		return foundService.querySingleInfoById(id);
	}
	
	@RequestMapping("/view/changeInfo.do")
	@ResponseBody
	public Object doChangeState(Integer id,String choose){
		if(choose.equals("lost")){
			LostInfo info=new LostInfo();
			info.setLostId(id);
			info.setHasFound(1);
			return lostService.updateSingleInfoById(info);
			
		}
		FoundInfo info=new FoundInfo();
		info.setFindId(id);
		info.setHasReturn(1);
		return foundService.updateSingleInfoById(info);
	}
	
	public LoginService getLoginService() {
		return loginService;
	}
	public NavService getNavService() {
		return navService;
	}
	public UserService getUserService() {
		return userService;
	}
	public LostService getLostService() {
		return lostService;
	}
	public FoundService getFoundService() {
		return foundService;
	}
	@Resource
	public void setFoundService(FoundService foundService) {
		this.foundService = foundService;
	}

	@Resource
	public void setLostService(LostService lostService) {
		this.lostService = lostService;
	}

	@Resource
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	@Resource
	public void setNavService(NavService navService) {
		this.navService = navService;
	}
	@Resource
	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}
}
