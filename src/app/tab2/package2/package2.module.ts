import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Package2PageRoutingModule } from './package2-routing.module';

import { Package2Page } from './package2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Package2PageRoutingModule
  ],
  declarations: [Package2Page]
})
export class Package2PageModule {}
