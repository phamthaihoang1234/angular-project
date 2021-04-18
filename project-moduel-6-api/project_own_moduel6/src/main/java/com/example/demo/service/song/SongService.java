package com.example.demo.service.song;

import com.example.demo.model.Song;
import com.example.demo.service.IGeneralService;
import org.springframework.stereotype.Service;


public interface SongService  {
    Song save(Song song);
    void delete(Long id);
    Iterable<Song> findAllByUserId(Long idUser);
    Iterable<Song> findAllByNameContains(String name);
    Iterable<Song> findAllByCreationTimeOrderByCreateTime();
    Iterable<Song> findAllByNumberOfViewOrOrderByNumberOfView();
    Song findById(Long id);
}
