import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  score1 = 0;
  score2 = 0;

  constructor() {}

  plusThree() {
    console.log(this.score1 += 3);
  }
  minusThree() {
    console.log(this.score1 -= 3);
    if (this.score1 < 0) {
       console.log(this.score1 = 0);
    }
  }
  plusTwoo() {
    console.log(this.score1 += 2);
  }
  minusTwo() {
    console.log(this.score1 -= 2);
    if (this.score1 < 0) {
      console.log(this.score1 = 0);
   }
  }
  plusOne() {
    console.log(this.score1 += 1);
  }
  minusOne() {
    console.log(this.score1 -= 1);
    if (this.score1 < 0) {
      console.log(this.score1 = 0);
   }
  }
  plusThreeB() {
    console.log(this.score2 += 3);
  }
  minusThreeB() {
    console.log(this.score2 -= 3);
    if (this.score2 < 0) {
      console.log(this.score2 = 0);
   }
  }
  plusTwooB() {
    console.log(this.score2 += 2);
  }
  minusTwoB() {
    console.log(this.score2 -= 2);
    if (this.score2 < 0) {
      console.log(this.score2 = 0);
   }
  }
  plusOneB() {
    console.log(this.score2 += 1);
  }
  minusOneB() {
    console.log(this.score2 -= 1);
    if (this.score2 < 0) {
      console.log(this.score2 = 0);
   }
  }
  reset() {
    console.log(this.score1 = 0);
    console.log(this.score2 = 0);
  }

}
