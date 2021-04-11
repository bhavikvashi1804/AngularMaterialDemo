import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
})
export class BadgesComponent implements OnInit {

  myRattings = 4;
  myRattings1 = 4;
  noOfNotifications = 0;
  constructor() {}

  ngOnInit(): void {}
}
