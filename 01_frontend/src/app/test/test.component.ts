import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  innerWidth: any;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
