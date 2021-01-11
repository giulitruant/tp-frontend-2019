import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class BusLineService {

  private get apiUrl(){
    return this.appConfig.getConfig().rootApiUrl;

  }

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService
  ) { }


  getBusLines(company: any){
    return this.http.get(this.apiUrl + '/lineaColectivo/' + company);

  }

  getBusLine(line: any){
    return this.http.get(this.apiUrl + '/lineaColectivo/' + line);

  }

  editBusLine(line: any){
    return this.http.put(this.apiUrl + '/lineaColectivo', line);

  }

  addBusLine(line: any){
    this.http.post(this.apiUrl + '/lineaColectivo', line);

  }

  deleteBusLine(line: any){
    return this.http.delete(this.apiUrl + '/lineaColectivo/' + line);

  }
}
