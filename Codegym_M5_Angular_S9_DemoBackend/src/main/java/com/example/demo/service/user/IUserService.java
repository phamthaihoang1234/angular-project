package com.example.demo.service.user;

import com.example.demo.model.Product;
import com.example.demo.model.User;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    Iterable<User> findAll();
    Optional<User> findById(Long id);
    User save (User user);
    void remove (Long id);
    List<User> findAllByUsernameContaining(String searchName, Pageable pageable);
}
