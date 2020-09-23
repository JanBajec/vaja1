import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  segment: any;
  myFromGroup: FormGroup;

  constructor(private modalCtrl: ModalController, private nav: NavParams) { }

  ngOnInit() {
    this.segment = this.nav.get('segment');
    this.myFromGroup = new FormGroup({
      name: new FormControl(this.segment.name, [Validators.required]),
      surname: new FormControl(this.segment.surname, [Validators.required]),
    });
  }

  onClose(){
    this.modalCtrl.dismiss();
  }

  onCheck(){
    this.segment.name = this.myFromGroup.get('name').value;
    this.segment.surname = this.myFromGroup.get('surname').value;
    this.modalCtrl.dismiss({selected: this.segment});
  }

}
