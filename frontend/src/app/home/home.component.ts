import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  point: number = 0;

  constructor() {}


  effect(e: any) {
    let body = document.getElementsByClassName('characters-img')[0];
    body.classList.add('move');
  }

  ngOnInit(): void {}

  Point(e: any) {
    // console.log(e)
    this.point = e;
  }
}
