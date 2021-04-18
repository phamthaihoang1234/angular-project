package com.example.demo.service.singer;

import com.example.demo.model.Singer;
import com.example.demo.repository.SingerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class ISingerService implements SingerService {
    @Autowired
    SingerRepository singerRepository;
    @Override
    public Optional<Singer> findById(Long id) {
        return singerRepository.findById(id);
    }

    @Override
    public Iterable<Singer> findAll() {
        return singerRepository.findAll();
    }

    @Override
    public void remove(Long id) {
        singerRepository.deleteById(id);

    }

    @Override
    public Singer save(Singer o) {
        return singerRepository.save(o);
    }
}
