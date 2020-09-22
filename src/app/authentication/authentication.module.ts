import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import {CostumeValidators} from '../globals/costumeValidators';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthenticationPageRoutingModule,
        ReactiveFormsModule,
    ],
  declarations: [AuthenticationPage]
})
export class AuthenticationPageModule {}
