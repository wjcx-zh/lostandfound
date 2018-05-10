package com.gduf.lostandfound.service;


import java.util.ArrayList;
import java.util.List;

import com.gduf.lostandfound.dao.LostDao;
import com.gduf.lostandfound.model.DataSet;
import com.gduf.lostandfound.model.LostInfo;
import com.gduf.lostandfound.vo.GoodsInfo;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

public class LostService {
	private LostDao lostDao;
	
	public DataSet queryAllInfo(Integer pn,Integer pageSize){
		//List<LostInfo> lists=lostDao.selectAllInfo();
		//System.out.println(lostDao.selectAllInfo());
		PageHelper.startPage(pn,pageSize);
		List<LostInfo> info=lostDao.selectAllInfo();
		DataSet dataSet=new DataSet();
		dataSet.setRows(info);
 		//System.out.println(info);

 		//System.out.println(dataSet);

		PageInfo<LostInfo> pageInfo=new PageInfo<LostInfo>(info);
 		dataSet.setTotal(pageInfo.getTotal());
 		//System.out.println(dataSet);
 		//System.out.println(pageInfo);

		return dataSet;
	}
	
	public LostDao getLostDao() {
		return lostDao;
	}

	public void setLostDao(LostDao lostDao) {
		this.lostDao = lostDao;
	}

	public int addLostInfo(LostInfo info) {
		// TODO Auto-generated method stub
		
		return lostDao.insertInfo(info);
		 
	}

	public DataSet queryInfoByConditions(GoodsInfo goods,Integer pn,Integer pageSize) {
		// TODO Auto-generated method stub
		PageHelper.startPage(pn, pageSize);
		List<LostInfo> info= lostDao.selectInfoByConditions(goods);
		DataSet dataSet=new DataSet();
		dataSet.setRows(info);
		PageInfo<LostInfo> pageInfo=new PageInfo<LostInfo>(info);
		dataSet.setTotal(pageInfo.getTotal());
		return dataSet;
	}

	public LostInfo querySingleInfoById(Integer id) {
		// TODO Auto-generated method stub
		return lostDao.selectSingleInfoById(id);
	}

	public int updateSingleInfoById(LostInfo info) {
		// TODO Auto-generated method stub
		return lostDao.updateSingleInfo(info);
	}

	public int dropInfoInIds(String ids) {
		// TODO Auto-generated method stub
		List<Integer> list=new ArrayList<Integer>();
		for(String str:ids.split(",")){
			list.add(Integer.parseInt(str));
		}
		return lostDao.deleteInfoInIds(list);
	}

	
}
