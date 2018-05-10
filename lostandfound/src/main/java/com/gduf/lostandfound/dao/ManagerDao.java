package com.gduf.lostandfound.dao;

import java.util.List;

import com.gduf.lostandfound.model.User;

public interface ManagerDao {
	List<User> selectManager();
	void insertManager(User user);
}
