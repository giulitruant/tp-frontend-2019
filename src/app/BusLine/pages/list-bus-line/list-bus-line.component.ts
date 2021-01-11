import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  business: any;
  form: FormGroup;
  selected: FormControl;
  lines: any;

  displayedColumns: string[] = ['idLineaColectivo', 'nombre', 'action'];

  constructor(
    private companyService: CompanyService,
    private lineService: BusLineService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(){
    this.form = new FormGroup({
      selected: new FormControl('', Validators.required)
    });

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
    debugger;
    console.dir(value);

    this.lineService.getBusLines(value)
    .toPromise()
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.lines.filter = filterValue.trim().toLowerCase();

    if (this.lines.paginator) {
      this.lines.paginator.firstPage();
    }
  }

  add(){
    this.router.navigate(['']);

  }


  edit(line: any){
    console.dir(line);
    //this.router.navigate(['/line/edit/' + line]);

  }
}
