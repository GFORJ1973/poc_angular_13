import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Gustavo';
  age = 50;
  job = 'Arquiteto de Software';

  constructor() {}

  ngOnInit(): void {}
}
