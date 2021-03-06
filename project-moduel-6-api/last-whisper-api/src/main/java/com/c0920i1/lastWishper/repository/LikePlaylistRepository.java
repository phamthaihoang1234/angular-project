package com.c0920i1.lastWishper.repository;

import com.c0920i1.lastWishper.model.LikePlaylist;
import com.c0920i1.lastWishper.model.LikePlaylistId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface LikePlaylistRepository extends CrudRepository<LikePlaylist, LikePlaylistId> {
    @Query(value = "select id from playlist join (select count(user_id) as like_number, playlist_id from like_playlist group by playlist_id order by like_number desc) likeplaylist where id = likeplaylist.playlist_id order by likeplaylist.like_number desc limit 5", nativeQuery = true)
    Iterable<BigInteger> findAllByPlaylistIsLike();

    @Query(value = "select count(user_id) as like_number, playList_id\n" +
            "from like_playlist group by playList_id \n" +
            "order by like_number desc limit 5", nativeQuery = true)
    List<BigInteger> findAllByLikeNumberOfPlayList();
}
