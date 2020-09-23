import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'package1',
    loadChildren: () => import('./package1/package1.module').then( m => m.Package1PageModule)
  },
  {
    path: 'package2',
    loadChildren: () => import('./package2/package2.module').then( m => m.Package2PageModule)
  },
  {
    path: 'package3',
    loadChildren: () => import('./package3/package3.module').then( m => m.Package3PageModule)
  },
  {
    path: 'package4',
    loadChildren: () => import('./package4/package4.module').then( m => m.Package4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
