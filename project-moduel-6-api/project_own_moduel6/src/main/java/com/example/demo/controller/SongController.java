package com.example.demo.controller;


import com.example.demo.model.Song;
import com.example.demo.model.User;
import com.example.demo.service.song.SongService;
import com.example.demo.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;


@RestController
@CrossOrigin("*")
public class SongController {
    @Autowired
    SongService songService;

    @Autowired
    IUserService userService;

    Date currentTime = Calendar.getInstance().getTime();

    @PostMapping("/createsong/{username}")
    public ResponseEntity<Song> create(@PathVariable String username, @RequestBody Song song){
        song.setCreationTime(currentTime);
        song.setNumberOfView(0L);
        User user = userService.findByUsername(username);
        song.setUser(user);
        songService.save(song);

        return new ResponseEntity<>(song, HttpStatus.OK);
    }

    @GetMapping("/viewsong/{username}/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable Long id){
        Song song = songService.findById(id);
        return new ResponseEntity<>(song, HttpStatus.OK);
    }

    @PutMapping("/editsong/{username}/{id}")
    public ResponseEntity<Song> editSong(@RequestBody Song song , @PathVariable Long id){
        if(songService.findById(id)!= null ){
            songService.save(song);
        }
        return new ResponseEntity<>(song, HttpStatus.OK);
    }

    @DeleteMapping("listsong/{id}")
    public ResponseEntity<Void> deleteSong(@PathVariable("id") Long id){
        Song song = songService.findById(id);
        if(song == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        songService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
