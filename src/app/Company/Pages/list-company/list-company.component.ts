import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  data:any;
  title: string = 'Empresas';

  displayedColumns: string[] = ['Cuit', 'RazonSocial', 'Telefono', 'Email', 'actions'];

  constructor(
    private service: CompanyService,
    private router: Router
  ) { }

  ngOnInit(): void {   

    this.service.getBusiness()
    .toPromise()
    .then(res => {
      this.data = res;
    })
    .catch(err => console.dir(err));

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  add(){    
    this.router.navigate(["/company/add"]);

  }

  edit(id: any){
    this.router.navigate(["/company/edit/" + id]);

  }

}
