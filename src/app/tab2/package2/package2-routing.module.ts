import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Package2Page } from './package2.page';

const routes: Routes = [
  {
    path: '',
    component: Package2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Package2PageRoutingModule {}
