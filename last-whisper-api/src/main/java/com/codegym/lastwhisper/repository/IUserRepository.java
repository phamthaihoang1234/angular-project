package com.codegym.lastwhisper.repository;


import com.codegym.lastwhisper.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    User findByFullName(String username);
    User findByUsername(String username);
}
