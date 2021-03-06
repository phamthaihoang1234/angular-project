package com.c0920i1.lastWishper.repository;

import com.c0920i1.lastWishper.model.Song;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface SongRepository extends CrudRepository<Song, Long> {
    @Query(value = "select * from song order by creation_time desc limit 10", nativeQuery = true)
    Iterable<Song> findAllByCreationTimeOrderByCreationTime();
    @Query(value = "select * from song order by number_of_view desc limit 10", nativeQuery = true)
    Iterable<Song> findAllByNumberOfViewOrderByNumberOfView();

    Iterable<Song> findAllByUserId(Long idUser);
    Iterable<Song> findAllByNameContains(String keyword);
}
