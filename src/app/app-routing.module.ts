import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodesComponent } from './codes/codes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodeDetailComponent } from './code-detail/code-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'codes', component: CodesComponent },
    { path: 'detail/:id', component: CodeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
