import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-demo',
  templateUrl: './scroll-demo.component.html',
  styleUrls: ['./scroll-demo.component.css']
})
export class ScrollDemoComponent implements OnInit {

  numbers = [];

  constructor() { 
    for(let i=0;i<1000;i++){
      this.numbers.push(i*10);
    }
  }

  ngOnInit(): void {
  }

}
