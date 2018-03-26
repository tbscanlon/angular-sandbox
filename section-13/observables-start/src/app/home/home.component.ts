import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private numberSub: Subscription;
  private customSub: Subscription;

  constructor() { }

  ngOnInit() {
    const numberEmitter = Observable.interval(1000)
      .map(
        (data: number) => data * 2
      );
    this.numberSub = numberEmitter.subscribe((num: number) => {
      console.log(num);
    });

    const observable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customSub = observable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.error(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.numberSub.unsubscribe();
    this.customSub.unsubscribe();
  }

}
