import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private _location: Location,
    private snackBar: MatSnackBar,
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

    debugger;

    this.service.editCompany(json)
    .toPromise()
    .then(res => {
      if(res){
        this.snackBar.openFromComponent(InfoModalComponent, {
          data: { message: 'Empresa actualizada con exito.', actionType: MessageType.Success },
          duration: 2000
        });
        this.router.navigate(['/company/home']);
      } else{
        this.snackBar.openFromComponent(InfoModalComponent, {
          data: { message: 'No se pudo actualizar la empresa.', actionType: MessageType.Warning },
          duration: 2000
        });
        this.router.navigate(['/company/home']);
      }

    })
    .catch(err => {
      alert('Ocurrio un error en la edicion de la empresa.');
      this.snackBar.openFromComponent(InfoModalComponent, {
        data: { message: 'Ocurrio un error en la edicion de la empresa.', actionType: MessageType.Danger },
        duration: 2000
      });
      this.router.navigate(['/company/home']);

    });
  }

  cancel(){
    this._location.back();
  }

}
