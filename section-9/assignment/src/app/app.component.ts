import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  // activeUsers = this.usersService.activeusers;
  // inactiveUsers = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService) {}
}
