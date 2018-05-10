package com.gduf.lostandfound.service;

import java.util.ArrayList;
import java.util.List;

import com.gduf.lostandfound.dao.FoundDao;
import com.gduf.lostandfound.model.DataSet;
import com.gduf.lostandfound.model.FoundInfo;

import com.gduf.lostandfound.vo.GoodsInfo;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

public class FoundService {
	
	private FoundDao foundDao;
	
	public DataSet queryAllInfo(Integer pn, Integer pageSize) {
		// TODO Auto-generated method stub
		PageHelper.startPage(pn, pageSize);
		List<FoundInfo> info=foundDao.selectAllInfo();
		DataSet dataSet=new DataSet();
		dataSet.setRows(info);
		PageInfo<FoundInfo> pageInfo=new PageInfo<FoundInfo>(info);
		dataSet.setTotal(pageInfo.getTotal());
		return dataSet;
	}

	public FoundDao getFoundDao() {
		return foundDao;
	}

	public void setFoundDao(FoundDao foundDao) {
		this.foundDao = foundDao;
	}
	//添加信息到数据库
	public int addFoundInfo(FoundInfo info) {
		// TODO Auto-generated method stub
		return foundDao.insertFoundInfo(info);
		
	}

	public DataSet queryInfoByConditions(GoodsInfo goods,Integer pn,Integer pageSize) {
		// TODO Auto-generated method stub
		PageHelper.startPage(pn, pageSize);
		List<FoundInfo> info= foundDao.selectInfoByConditions(goods);
		System.out.println(info);
		DataSet dataSet=new DataSet();
		dataSet.setRows(info);
		PageInfo<FoundInfo> pageInfo=new PageInfo<FoundInfo>(info);
		dataSet.setTotal(pageInfo.getTotal());
		 return dataSet;
	}

	public FoundInfo querySingleInfoById(Integer id) {
		// TODO Auto-generated method stub
		return foundDao.querySingleInfoById(id);
	}

	public int updateSingleInfoById(FoundInfo info) {
		// TODO Auto-generated method stub
		return foundDao.updateSingleInfo(info);
	}

	public int dropInfoInIds(String ids) {
		// TODO Auto-generated method stub
		List<Integer> list=new ArrayList<Integer>();
		for(String str:ids.split(",")){
			list.add(Integer.parseInt(str));
		}
		
		return foundDao.deleteInfoInIds(list);
	}

}
