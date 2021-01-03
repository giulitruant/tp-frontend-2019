import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
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

  @ViewChild('InfoModalComponent') basicModal: ElementRef;
  company= null;
  result: any;

  constructor(
    private service: CompanyService,
    private snackBar: MatSnackBar,
    private _location: Location,
    private router: Router
  ) {  }

  ngOnInit(): void { }

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
        this.snackBar.openFromComponent(InfoModalComponent, {
          data: { message: 'Empresa agregada con exito.', actionType: MessageType.Success },
          duration: 2000
        });
        this.router.navigate(['/company/home']);

      } else{
        this.snackBar.openFromComponent(InfoModalComponent, {
          data: { message: 'No se pudo agregar la empresa', actionType: MessageType.Warning },
          duration: 2000
        });
        this.router.navigate(['/company/home']);
      }
    })
    .catch(err => {
      this.snackBar.openFromComponent(InfoModalComponent, {
        data: { message: 'Ocurrio un error al guardar la empresa.', actionType: MessageType.Danger },
        duration: 2000
      });
      this.router.navigate(['/company/home']);
    });
  }

  cancel(){
    this._location.back();
  }


}
