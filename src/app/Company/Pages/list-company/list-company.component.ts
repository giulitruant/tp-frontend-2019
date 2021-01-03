import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MessageType } from 'src/app/Constant/info-modal-contant';
import { InfoModalComponent } from 'src/app/info-modal/info-modal.component';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent{
  data:any;
  title: string = 'Empresas';
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['Cuit', 'RazonSocial', 'Telefono', 'Email', 'actions'];

  constructor(
    private service: CompanyService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.config();

   }

   config(){
    this.service.getBusiness()
    .toPromise()
    .then((res: any) => {
      this.dataSource = new MatTableDataSource(res);
    })
    .catch(err => console.dir(err));

   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add(){
    this.router.navigate(["/company/add"]);

  }

  edit(id: any){
    this.router.navigate(["/company/edit/" + id]);

  }

  // delete(id: any){
  //   this.service.deleteCompany(id)
  //   .toPromise()
  //   .then(res => {
  //     this.snackBar.openFromComponent(InfoModalComponent, {
  //       data: { message: 'Empresa eliminada.', actionType: MessageType.Success },
  //       duration: 2000
  //     });
  //     this.config();
  //   })
  //   .catch(err => {
  //     this.snackBar.openFromComponent(InfoModalComponent, {
  //       data: { message: 'Ocurrio un error al eliminar la empresa.', actionType: MessageType.Success },
  //       duration: 2000
  //     });
  //     this.config();
  //   });

  // }

}
