package com.codegym.demo.controller;

import com.codegym.demo.model.Response;
import com.codegym.demo.model.Student;
import com.codegym.demo.service.student.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/students")
public class StudentController {
    private final Response response = new Response();
    @Autowired
    private IStudentService studentService;

    @GetMapping
    public Response getAllStudent(@RequestParam int page, @RequestParam int size) {
        List<Student> students = studentService.findAll(page, size);
        response.setData(students);
        if (students.isEmpty()) {
            response.setStatus(1);
            response.setMessage("Empty");
        } else {
            response.setStatus(1);
            response.setMessage("Success");
        }
        return response;
    }
}
