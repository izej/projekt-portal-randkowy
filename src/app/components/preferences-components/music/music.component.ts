import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/rest-api/model/music';
import { MusicService } from 'src/app/rest-api/services/music.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

musicList: Array<Music> = [];

  constructor(private musicService: MusicService) {
    this.musicService.getMusicListObs().subscribe((music: Array<Music>) => {
      this.musicList = music;
      this.musicList = music.slice();
    });
  }

  ngOnInit() {
  }

}
