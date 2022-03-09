import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit {
  showMusicList: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  mouseOverMusicList(): void {
    this.showMusicList = true;
  }

  mouseOutMusicList(): void {
    this.showMusicList = false;
  }
}
