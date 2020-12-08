import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  cuit: any;
  company: any;

  constructor(
    private route: ActivatedRoute,
    private service: CompanyService,
    private _location: Location
  ) { }

  ngOnInit(): void {    
    this.route.params.subscribe(param => {
      this.cuit = param['id'];

      this.getConfig(this.cuit);
    })
  }

  getConfig(cuit: any){
    this.service.getCompany(cuit)
    .toPromise()
    .then(res => {      
        this.company = res;
    
      })
    .catch(err => console.error(err));

  } 

  onCompanyEdition(company: any){
    debugger;
    

    const json = {
      Cuit: company.Cuit,
      RazonSocial: company.RazonSocial,
      Provincia: company.Provincia,
      Localidad: company.Localidad,
      Domicilio: company.Domicilio,
      Telefono: company.Telefono,
      Email: company.Email

    }

    this.service.editCompany(json)
    .toPromise()
    .then(res => {
      console.dir(res);
      alert('Empresa editada con exito.');
    })
    .catch(err => {
      alert('Ocurrio un error al guardar la empresa.');
      console.error(err);
    });
  }

  cancel(){
    this._location.back();
  }

}
