import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-badge',
  templateUrl: './header-badge.component.html',
  styleUrls: ['./header-badge.component.css']
})
export class HeaderBadgeComponent implements OnInit {

  constructor() { }
  log(): void {
    console.log('click dropdown button');
  }
  ngOnInit() {
  }

}
