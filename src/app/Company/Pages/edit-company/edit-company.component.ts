import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageType } from 'src/app/Constant/info-modal-contant';
import { InfoModalComponent } from 'src/app/info-modal/info-modal.component';
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
    private router: Router,
    private service: CompanyService,
    private _location: Location
    // private dialog: InfoModalComponent,
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
      alert('Empresa agregada con exito.');
      // this.dialog.openSnackBar('Empresa agregada con exito.', MessageType.Success);
      this.router.navigate(['/company/home']);
    })
    .catch(err => {
      alert('Ocurrio un error al guardar la empresa.');
      // alert('Ocurrio un error al guardar la empresa.');
      // this.dialog.openSnackBar('Ocurrio un error al guardar la empresa.', MessageType.Danger);
      console.error(err);
      this.router.navigate(['/company/home']); 
    });
  }

  cancel(){    
    this._location.back();
  }

}
