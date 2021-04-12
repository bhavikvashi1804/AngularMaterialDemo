import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepick-demo',
  templateUrl: './datepick-demo.component.html',
  styleUrls: ['./datepick-demo.component.css'],
})
export class DatepickDemoComponent implements OnInit {
  minDate = new Date();
  maxDate = new Date(2022, 10, 10);

  constructor() {}

  ngOnInit(): void {}

  dateFilter = (date) => {
    const day = date.getDay();
    return day != 0 && day != 6;
  };
}
