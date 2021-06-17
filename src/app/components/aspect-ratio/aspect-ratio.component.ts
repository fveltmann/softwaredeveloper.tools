import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspect-ratio',
  templateUrl: './aspect-ratio.component.html',
  styleUrls: ['./aspect-ratio.component.scss']
})
export class AspectRatioComponent implements OnInit {
  w1: number = 0;
  w2: number = 0;
  h1: number = 0;
  h2: number = 0;

  constructor() { }
  ngOnInit(): void { }

  setW1(value: number) {
    this.w2 = this.ratio * value;
  }

  setH1(value: number) {
    this.h2 = value / this.ratio;
  }

  get ratio() {
    return (this.w1 / this.h1);
  }
}
