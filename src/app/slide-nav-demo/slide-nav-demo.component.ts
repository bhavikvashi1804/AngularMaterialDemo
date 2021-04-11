import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-nav-demo',
  templateUrl: './slide-nav-demo.component.html',
  styleUrls: ['./slide-nav-demo.component.css'],
})
export class SlideNavDemoComponent implements OnInit {
  opened = false;

  constructor() {}

  ngOnInit(): void {}

  log(data){
    console.log(data);
  }
}
