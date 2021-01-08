import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageType } from 'src/app/Constant/info-modal-contant';
import { InfoModalComponent } from 'src/app/info-modal/info-modal.component';
import { BusLineService } from 'src/app/Service/bus-line.service';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-list-bus-line',
  templateUrl: './list-bus-line.component.html',
  styleUrls: ['./list-bus-line.component.css']
})
export class ListBusLineComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  business: any;
  selected : FormControl;
  lines:any;

  constructor( 
    private companyService: CompanyService,    
    private lineService: BusLineService,
    private snackBar: MatSnackBar
  ) {
    this.selected = new FormControl('', [
      Validators.required
    ])
   }

  ngOnInit(){    
    this.companyService.getBusiness().toPromise()
    .then(res => {
      this.business = res;
    })
    .catch(err => {
      console.log(err);
      this.snackBar.openFromComponent(InfoModalComponent, {
        data: { message: 'No se pudieron recuperar las empresas', actionType: MessageType.Success },
        duration: 2000
      });
    });
    
  }

  onChange(value){
    this.lineService.getBusLines(value).toPromise()
    .then(res => {
      this.lines = res;

    })
    .catch(err => {
      console.log(err);
      this.snackBar.openFromComponent(InfoModalComponent, {
        data: { message: 'No se pudieron recuperar las lineas de colectivos', actionType: MessageType.Success },
        duration: 2000
      });
    });
  }
}
