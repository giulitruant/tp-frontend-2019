import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageType } from 'src/app/Constant/info-modal-contant';
import { InfoModalComponent } from 'src/app/info-modal/info-modal.component';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company= null;

  constructor(
    private service: CompanyService,
    // private dialog: InfoModalComponent,
    private _location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    debugger;
  }

  onCompanyCreated(company: any){

    const json = {
      Cuit: company.Cuit,
      RazonSocial: company.RazonSocial,
      Provincia: company.Provincia,
      Localidad: company.Localidad,
      Domicilio: company.Domicilio,
      Telefono: company.Telefono,
      Email: company.Email

    }

    this.service.addCompany(json)
    .toPromise()
    .then(res => {
      if(res){
        alert('Empresa agregada con exito.');
        this.router.navigate(['/company/home']);
        // this.dialog.openSnackBar('Empresa agregada con exito.', MessageType.Success);
      } else{
        alert('No se pudo agregar la empresa');
        this.router.navigate(['/company/home']);
        // this.dialog.openSnackBar('No se pudo agregar la empresa', MessageType.Info);
      }
    })
    .catch(err => {
      alert('Ocurrio un error al guardar la empresa.');
      this.router.navigate(['/company/home']);
      // this.dialog.openSnackBar('Ocurrio un error al guardar la empresa.', MessageType.Danger);      
    });
  }

  cancel(){
    debugger;
    this._location.back();
  }

}
