import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
    activeusers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {}

    public deactivate(id: number) {
        this.moveUser(id, this.activeusers, this.inactiveUsers);
        console.log(this.counterService.incrementDeactivations());
    }

    public activate(id: number) {
        this.moveUser(id, this.inactiveUsers, this.activeusers);
        console.log(this.counterService.incrementActivations());
    }

    private moveUser(id: number, source: string[], destination: string[]) {
        destination.push(source[id]);
        source.splice(id, 1);
    }
}
