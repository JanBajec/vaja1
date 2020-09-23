import {Component, NgZone, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  myRange = {
    lower: 40,
    upper: 50
  };

  constructor() {}

  ngOnInit() {
  }

  refresh(mylower: number, myupper: number){
    this.myRange = {
      lower: mylower,
      upper: myupper
    };
  }

}
