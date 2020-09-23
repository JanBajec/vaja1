import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Package3PageRoutingModule } from './package3-routing.module';

import { Package3Page } from './package3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Package3PageRoutingModule
  ],
  declarations: [Package3Page]
})
export class Package3PageModule {}
