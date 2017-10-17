// Allows use of the @Component decorator
import { Component } from '@angular/core';

// Marks class as Angular component and provides metadata
@Component({
    selector: 'app-server', // the name used in HTML tags to refer to the component
    templateUrl: './server.component.html', // the template used by the component
    styles: [`
    .online {
        background-color: lightgreen
    }
    `]
})

// Component class - angular components are regular TS classes
export class ServerComponent { // Classes need to be exported to be used elsewhere by Angular
    serverId = 10;
    serverStatus = 'offline';

    constructor() {
        this.determineInitialState();
    }

    public getServerStatus(): string {
        return this.serverStatus;
    }

    public getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    private determineInitialState(): void {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
}
