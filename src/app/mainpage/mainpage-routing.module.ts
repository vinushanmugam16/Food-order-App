import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [{
  path:'', children:[{path:'mainpage', component:MainpageComponent,canActivate:[AuthGuard]}, {path:'', redirectTo:'mainpage',pathMatch:'full'}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class MainpageRoutingModule { }
