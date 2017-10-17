import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username: string;
  public isEmptyUsername = true;

  public onUpdateUserName(): void {
    this.isEmptyUsername = false;
  }
  
  public resetUsername(): void {
    this.username = '';
    this.isEmptyUsername = true;
  }
}
