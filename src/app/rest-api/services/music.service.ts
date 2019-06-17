import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Music } from '../model/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musicList: Array<Music> = [];

  private musicListObs = new BehaviorSubject<Array<Music>>([]);

  constructor() {
    this.musicList = [
      {id: 1, name: 'rock'},
      {id: 2, name: 'metal'},
      {id: 3, name: 'rap'},
      {id: 4, name: 'hip-hop'},
      {id: 5, name: 'pop'},
      {id: 6, name: 'jazz'},
      {id: 7, name: 'reggae'},
      {id: 8, name: 'muzyka klasyczna'},
      {id: 9, name: 'techno'},
      {id: 10, name: 'country'},
      {id: 11, name: 'gospel'}
    ];
    this.musicListObs.next(this.musicList);
  }
  getMusicListObs(): Observable<Array<Music>> {
    return this.musicListObs.asObservable();
  }
}
