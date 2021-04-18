package com.example.demo.repository;

import com.example.demo.model.User;
import com.example.demo.model.UserDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserDetailService extends CrudRepository<UserDetail, Long> {
    UserDetail findUserDetailByUser(User user);
}
