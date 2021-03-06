package com.codegym.lastwhisper.service.role;


import com.codegym.lastwhisper.model.Role;
import com.codegym.lastwhisper.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;


    @Override
    public Iterable<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }

    @Override
    public void remove(Long id) {
        roleRepository.deleteById(id);
    }
}
