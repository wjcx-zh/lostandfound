package com.gduf.lostandfound.dao;

import java.util.List;

import com.gduf.lostandfound.model.User;

public interface UserDao {
	List<User> selectUserByRole(int role);
	int insertUser(User user);
	User selectUserById(Integer id);
	int updateUser(User user);
	int deleteUserInIds(List<Integer> list);
	List<User> selectUserByCondition(User user);
}
