import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-compl-demo',
  templateUrl: './auto-compl-demo.component.html',
  styleUrls: ['./auto-compl-demo.component.css']
})
export class AutoComplDemoComponent implements OnInit {

  options: string[] = ['Angular', 'React', 'Vue'];

  constructor() { }

  ngOnInit(): void {
  }

}
