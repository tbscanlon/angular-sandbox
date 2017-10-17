import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private panelVisible: boolean;
  private loggedClicks: String[];

  constructor() {
    this.panelVisible = false;
    this.loggedClicks = [];
  }

  public onShowDetailsClicked(): void {
    this.togglePanel();
    if (this.panelVisible) {
      this.recordClick();
    }
  }

  private togglePanel():void {
    this.panelVisible = !this.panelVisible;    
  }

  private recordClick(): void {
    this.loggedClicks.push(new Date().toString());
  }
}
