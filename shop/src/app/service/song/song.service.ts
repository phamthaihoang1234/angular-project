import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {song} from '../../model/song';
import {environment} from '../../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class SongService {

  currentUser: any;
  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
      if(this.currentUser){
      }

    })
  }
  getSongById(id: number): Observable<song> {
    return this.http.get<song>(API_URL + `/songs/${id}`);
  }
  createSong(song: song, username : String): Observable<song>{
    console.log(username);
    return this.http.post<song>(API_URL + `/createsong/${username}`, song);
  }
}
