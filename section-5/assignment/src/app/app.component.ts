import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  public onTimerIncreased(event): void {
    if (event.num % 2 === 0) {
      this.createEven();
    } else {
      this.createOdd();
    }
  }

  private createOdd(): void {
    this.oddNumbers.push('ODD');
  }

  private createEven(): void {
    this.evenNumbers.push('EVEN');
  }
}
