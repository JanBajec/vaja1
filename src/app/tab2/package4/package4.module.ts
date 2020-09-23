import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Package4PageRoutingModule } from './package4-routing.module';

import { Package4Page } from './package4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Package4PageRoutingModule
  ],
  declarations: [Package4Page]
})
export class Package4PageModule {}
