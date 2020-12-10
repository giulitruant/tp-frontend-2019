import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['Cuit', 'RazonSocial', 'Telefono', 'Email', 'actions'];

  constructor(
    private service: CompanyService,
    private router: Router
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

  //  ngAfterViewInit() {
  //   // this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

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

}
