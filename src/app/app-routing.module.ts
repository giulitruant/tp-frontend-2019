import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCompanyComponent } from './Company/Pages/add-company/add-company.component';
import { ListCompanyComponent } from './Company/Pages/list-company/list-company.component';
import { EditCompanyComponent } from './Company/Pages/edit-company/edit-company.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,    
    children: [
      {
        path: 'company',
        component: HomeComponent,
        children: [
          { path: 'home', component:  ListCompanyComponent, pathMatch: 'full'},
          { path: 'edit/:id', component:  EditCompanyComponent, pathMatch: 'full'},
          { path: 'add', component:  AddCompanyComponent, pathMatch: 'full'}
        ]
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
