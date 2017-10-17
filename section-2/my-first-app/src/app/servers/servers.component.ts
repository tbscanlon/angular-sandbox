import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'Test server';
  serverCreationStatus = 'No Server was Created';
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
     }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server created. Name is ${this.serverName}`;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any): void {
    this.serverName = event.target.value;
  }
}
