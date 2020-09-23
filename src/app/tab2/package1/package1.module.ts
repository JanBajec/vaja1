import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Package1PageRoutingModule } from './package1-routing.module';

import { Package1Page } from './package1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Package1PageRoutingModule
  ],
  declarations: [Package1Page]
})
export class Package1PageModule {}
