package com.example.demo.service.song;

import com.example.demo.model.Song;
import com.example.demo.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ISongService implements SongService {
    @Autowired
    SongRepository songRepository;

    @Override
    public Song save(Song song) {
        return songRepository.save(song);
    }

    @Override
    public void delete(Long id) {
        songRepository.deleteById(id);

    }

    @Override
    public Iterable<Song> findAllByUserId(Long idUser) {
        return songRepository.findAllByUserId(idUser);
    }

    @Override
    public Iterable<Song> findAllByNameContains(String name) {
        return songRepository.findAllByNameContains(name);
    }

    @Override
    public Iterable<Song> findAllByCreationTimeOrderByCreateTime() {
        return songRepository.findAllByCreationTimeOrderByCreateTime();
    }

    @Override
    public Iterable<Song> findAllByNumberOfViewOrOrderByNumberOfView() {
        return songRepository.findAllByNumberOfViewOrOrderByNumberOfView();
    }

    @Override
    public Song findById(Long id) {
        return songRepository.findById(id).orElse(null);
    }





}
