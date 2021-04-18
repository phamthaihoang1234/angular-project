package com.example.demo.service;

import com.example.demo.model.User;

public interface UserService {

    User findByEmail(String email) throws Exception;

    User saveUser(User user) throws Exception;
}
