package com.example.demo.service.impl;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findOneByUsername(email);
        return user;
    }

    @Override
    public User findByEmail(String email) throws Exception {
        User user = userRepo.findOneByUsername(email);
        return user;
    }

    @Override
    public User saveUser(User user) throws Exception {
        return userRepo.save(user);
    }
}
