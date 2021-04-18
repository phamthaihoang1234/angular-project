package com.example.demo.controller;


import com.example.demo.model.Employee;
import com.example.demo.model.Product;
import com.example.demo.service.employee.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/employees")
public class EmployeeController {


    @Autowired
    IEmployeeService iEmployeeService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable allEmployees() {
        return iEmployeeService.findAll();
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Employee createEmployee(@RequestBody Employee employee){
        return iEmployeeService.save(employee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id){
        Optional<Employee> employee= iEmployeeService.findById(id);
        if(employee == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
        iEmployeeService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);


    }

    @PutMapping(value = "/{id}" , produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Employee edit(@PathVariable Long id , @RequestBody Employee employee){
        employee.setId(id);
        return iEmployeeService.save(employee);
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Employee employeeDetail(@PathVariable Long id){return iEmployeeService.findById(id).get();}
}
