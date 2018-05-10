package com.gduf.lostandfound.dao;

import java.util.List;

import com.gduf.lostandfound.model.Navigator;

public interface NavDao {

	List<Navigator> selectNavInfo(int id);

}
