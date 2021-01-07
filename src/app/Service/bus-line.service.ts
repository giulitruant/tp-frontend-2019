import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class BusLineService {

  get apiUrl(){
    return this.appConfig.getConfig().rootApiUrl;    
    
  }

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService
  ) { }


  getBusLines(company: any){
    this.http.get(this.appConfig + '/lineaColectivo/' + company);

  }

  getBusLine(line: any){
    this.http.get(this.appConfig + '/lineaColectivo/' + line);

  }

  editBusLine(line: any){
    this.http.put(this.appConfig + '/lineaColectivo', line);

  }

  addBusLine(line: any){
    this.http.post(this.appConfig + '/lineaColectivo', line);

  }

  deleteBusLine(line: any){
    this.http.delete(this.appConfig + '/lineaColectivo/' + line);

  }
}
