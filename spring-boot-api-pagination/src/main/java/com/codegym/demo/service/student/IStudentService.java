package com.codegym.demo.service.student;

import com.codegym.demo.model.Student;
import com.codegym.demo.service.IGeneralService;

import java.util.List;

public interface IStudentService extends IGeneralService<Student> {
    List<Student> findAll(int page, int size);
}
