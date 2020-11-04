import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MfWrapper1Component } from './mf-wrapper1/mf-wrapper1.component';
import { MfWrapper2Component } from './mf-wrapper2/mf-wrapper2.component';


const routes: Routes = [
  { path: '', redirectTo: '/mf1', pathMatch: 'full' },
  { path: 'mf1', component: MfWrapper1Component },
  { path: 'mf2', component: MfWrapper2Component }
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
