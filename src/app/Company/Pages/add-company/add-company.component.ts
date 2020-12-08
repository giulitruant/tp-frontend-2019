import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company: any;


  constructor(
    private service: CompanyService
  ) { }

  ngOnInit(): void {
  }

  onCompanyCreated(company: any){
    this.service.addCompany(JSON.stringify(company))
    .toPromise()
    .then(res => {
      console.dir(res);
      alert('Empresa agregada con exito.');
    })
    .catch(err => {
      alert('Ocurrio un error al guardar la empresa.');
      console.error(err);
    });
  }

}
