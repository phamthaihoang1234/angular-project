import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class PlaylistServiceService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<Playlist[]>{
  //   return this.http.get<Playlist[]>(API_URL + '/playlists');
  // }
  /** GET: all playlist */
  getAll(page: number , size: number): Observable<any>{
    return this.http.get( `${API_URL}/playlists?page=${page}&size=${size}`);
  }
}
