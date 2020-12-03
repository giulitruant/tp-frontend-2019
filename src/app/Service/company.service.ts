import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private get apiUrl(){
    return this.appConfig.getConfig().rootApiUrl;
  }

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService
  ) { }


  getBusiness(){
    return this.http.get(this.apiUrl + 'Empresa');

  }

  getCompany(id: any){
    return this.http.get(this.apiUrl + 'Empresa' + id);

  }

  addCompany(data: any){
    return this.http.post(this.apiUrl + 'Empresa', data);

  }

  editCompany(data: any){
    return this.http.put(this.apiUrl + 'Empresa', data);

  }

  deleteCompany(id: any){
    return this.http.delete(this.apiUrl + 'Empresa' + id);
  }


}
