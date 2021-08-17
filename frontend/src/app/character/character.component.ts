import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Output() sendPoint = new EventEmitter();
  @Output() sendMove = new EventEmitter();

  NumberOfPoint: number = 0;
  ValueOfClick: number = 1;

  constructor() {}

  ClickToCharacter() {
    this.NumberOfPoint += this.ValueOfClick;
    // console.log(this.NumberOfPoint);
    this.sendPoint.emit(this.NumberOfPoint);

    if (this.NumberOfPoint == 10) {
      this.sendMove.emit(true);
    }
  }

  ngOnInit(): void {}
}
