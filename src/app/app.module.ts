import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material-module';
import { AddCompanyComponent } from './Company/Pages/add-company/add-company.component';
import { ListCompanyComponent } from './Company/Pages/list-company/list-company.component';
import { EditCompanyComponent } from './Company/Pages/edit-company/edit-company.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
