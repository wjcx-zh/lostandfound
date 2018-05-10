package com.gduf.lostandfound.dao;

import java.util.List;

import com.gduf.lostandfound.model.LostInfo;
import com.gduf.lostandfound.vo.GoodsInfo;

public interface LostDao {

	List<LostInfo> selectAllInfo();

	int insertInfo(LostInfo info);

	List<LostInfo> selectInfoByConditions(GoodsInfo goods);

	LostInfo selectSingleInfoById(Integer id);

	int updateSingleInfo(LostInfo info);

	int deleteInfoInIds(List<Integer> list);

}
