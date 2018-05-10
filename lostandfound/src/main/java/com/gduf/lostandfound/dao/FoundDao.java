package com.gduf.lostandfound.dao;

import java.util.List;

import com.gduf.lostandfound.model.FoundInfo;
import com.gduf.lostandfound.vo.GoodsInfo;

public interface FoundDao {

	List<FoundInfo> selectAllInfo();

	int insertFoundInfo(FoundInfo info);

	List<FoundInfo> selectInfoByConditions(GoodsInfo goods);

	FoundInfo querySingleInfoById(Integer id);

	int updateSingleInfo(FoundInfo info);
	
	

	int deleteInfoInIds(List<Integer> list);

}
