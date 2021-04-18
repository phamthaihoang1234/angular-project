package com.example.demo.service.role;

import com.example.demo.model.Role;
import com.example.demo.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class IRoleService implements RoleService {
    @Autowired
    IRoleRepository roleRepository;
    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }

    @Override
    public Iterable<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public void remove(Long id) {
        roleRepository.deleteById(id);

    }

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }
}
