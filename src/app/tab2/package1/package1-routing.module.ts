import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Package1Page } from './package1.page';

const routes: Routes = [
  {
    path: '',
    component: Package1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Package1PageRoutingModule {}
