import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStatisticsComponent } from './main-statistics/main-statistics.component';

const routes: Routes = [
  {
    path:'',
    component:MainStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }