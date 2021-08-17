import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Output() sendPoint = new EventEmitter();

  NumberOfPoint: any = 0;
  ValueOfClick: number = 1;

  constructor() { }

  ClickToCharacter() {
    this.NumberOfPoint += this.ValueOfClick;
    // console.log(this.NumberOfPoint)
    this.sendPoint.emit(this.NumberOfPoint);

  }

  ngOnInit(): void {
  }


}
