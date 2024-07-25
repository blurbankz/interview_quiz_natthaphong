import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview_quiz_natthaphong';

  //A ----------------------------------------------------------------
  numbersA = [5, 2, 44, 12, 34];
  getExampleA(numbers: number[]): number {
    let maxValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i];
      }
    }
    return maxValue;
  }
}

