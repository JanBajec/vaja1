import { Component } from '@angular/core';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {TestComponent} from '../components/test/test.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myModal = {
    id: 1,
    name: 'Jan',
    surname: 'Bajec',
  };

  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {}

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: TestComponent,
      componentProps: {
        segment: this.myModal,
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    await modal.present();
  }

}
