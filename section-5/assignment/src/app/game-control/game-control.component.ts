import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementTimer = new EventEmitter<{num: number}>();
  private timer: number;
  private interval: any;

  constructor() { }

  ngOnInit() {
    this.timer = 0;
  }

  public onStartGame(): void {
    this.interval = setInterval(() => {
      this.timer += 1;
      this.incrementTimer.emit({
        num: this.timer
      });
      console.log(this.timer);
    }, 1000);
  }

  public onStopGame(): void {
    clearInterval(this.interval);
    this.timer = 0;
    console.log(this.timer);    
  }
}
