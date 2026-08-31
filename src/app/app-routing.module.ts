import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path:'registration',
  loadChildren:()=>import('./modules/registration/registration-routing.module').then((m)=>m.RegistrationRoutingModule)
},
{ path: '', redirectTo: '/registration/signup', pathMatch: 'full' },
{
  path:'dashboard',
  loadChildren:()=>import('./modules/dashboard/dashboard-routing.module').then(m=>m.DashboardRoutingModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
