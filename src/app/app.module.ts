import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material-module';
import { AddCompanyComponent } from './Company/Pages/add-company/add-company.component';
import { ListCompanyComponent } from './Company/Pages/list-company/list-company.component';
import { EditCompanyComponent } from './Company/Pages/edit-company/edit-company.component';
import { CompanyFormComponent } from './Company/components/company-form/company-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigService } from './Service/app-config.service';
import { MatIconModule } from '@angular/material/icon';
import { InfoModalComponent } from './info-modal/info-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    EditCompanyComponent,
    CompanyFormComponent,
    InfoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.loadAppConfig(), deps: [AppConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
