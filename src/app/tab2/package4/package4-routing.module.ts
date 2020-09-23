import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Package4Page } from './package4.page';

const routes: Routes = [
  {
    path: '',
    component: Package4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Package4PageRoutingModule {}
