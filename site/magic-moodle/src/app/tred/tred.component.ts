import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tred',
  templateUrl: './tred.component.html',
  styleUrls: ['./tred.component.css']
})
export class TredComponent implements OnInit {
  wasPressed = false;
  sent = false;

  click(state: any) {
    this.wasPressed = state;
    this.sent = false;
  }

  send() {
    this.sent = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
