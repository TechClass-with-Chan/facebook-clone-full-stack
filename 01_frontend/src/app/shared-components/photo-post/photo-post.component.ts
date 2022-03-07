import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PhotoPost } from 'src/app/vo/photo-post';
import { PhotoPostDialogComponent } from '../photo-post-dialog/photo-post-dialog.component';

@Component({
  selector: 'app-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.css'],
})
export class PhotoPostComponent implements OnInit {
  @Input() photoPost!: PhotoPost;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openPhotoPostDialog(): void {
    this.dialog.open(PhotoPostDialogComponent, {
      panelClass: 'dialog-panel',
      height: '70%',
      width: '90%',
    });
  }
}
