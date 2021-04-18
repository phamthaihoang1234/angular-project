package com.example.demo.service.employee;


import com.example.demo.model.Employee;
import com.example.demo.model.Product;

import java.util.Optional;

public interface IEmployeeService {
    Iterable<Employee> findAll();
    Optional<Employee> findById(Long id);
    Employee save (Employee employee);
    void remove (Long id);
}
