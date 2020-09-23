import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Package3Page } from './package3.page';

const routes: Routes = [
  {
    path: '',
    component: Package3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Package3PageRoutingModule {}
