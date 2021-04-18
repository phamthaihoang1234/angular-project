package com.example.demo.service.userdetailservice;

import com.example.demo.model.User;
import com.example.demo.model.UserDetail;
import com.example.demo.service.IGeneralService;

public interface UserDetailService extends IGeneralService<UserDetail> {
    UserDetail findUserDetailByUser(User user);
}
