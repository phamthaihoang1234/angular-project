package com.example.demo.repository;

import com.example.demo.model.Song;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SongRepository extends CrudRepository<Song,Long> {
    Iterable<Song> findAllByUserId(Long idUser);
    Iterable<Song> findAllByNameContains(String name);

    @Query(value = "select * from song order by creation_time desc limit 7", nativeQuery = true)
    Iterable<Song> findAllByCreationTimeOrderByCreateTime();

    @Query(value = "select * from song order by number_of_view desc limit 10", nativeQuery = true)
    Iterable<Song> findAllByNumberOfViewOrOrderByNumberOfView();



}
