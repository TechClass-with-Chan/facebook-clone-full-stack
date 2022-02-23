import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.css'],
})
export class SidemenuItemComponent implements OnInit {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() href!: string;
  @Input() showOptions!: boolean;
  @Input() badgeNumber!: number;
  @Input() img!: string;
  @Input() external!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
