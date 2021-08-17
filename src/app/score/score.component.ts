import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit, OnChanges {
  @Input() pointInput: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    // console.log(this.pointInput)
  }
}
