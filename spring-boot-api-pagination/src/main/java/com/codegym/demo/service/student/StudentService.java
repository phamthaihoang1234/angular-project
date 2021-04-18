package com.codegym.demo.service.student;

import com.codegym.demo.model.Student;
import com.codegym.demo.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private IStudentRepository studentService;

    @Override
    public List<Student> findAll() {
        return studentService.findAll();
    }

    @Override
    public Optional<Student> findById(Long id) {
        return studentService.findById(id);
    }

    @Override
    public Student save(Student role) {
        return studentService.save(role);
    }

    @Override
    public void remove(Long id) {
        studentService.deleteById(id);
    }

    @Override
    public List<Student> findAll(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Student> students = studentService.findAll(pageRequest);
        return students.getContent();
    }
}
