import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WHomeComponent } from './w-home/w-home.component';
import { WLoginComponent } from './w-login/w-login.component';
import { WRegisterComponent } from './w-register/w-register.component';

const routes: Routes = [
  {
    path:'',component:WHomeComponent
   },
  {
    path:'login',component:WLoginComponent
   },
 {
  path:'register',component:WRegisterComponent
 },
 {
  path:'dashboard',component:DashboardComponent
 },
 {
  path:'edit-contact',component:EditContactComponent
 }
 ,
 {
  path:'dashboard2',component:EditDeleteComponent
 },
 {
  path:'user-details',component:UserDetailsComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
