import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  data:any;

  constructor(
    private service: CompanyService
  ) { }

  ngOnInit(): void {
    debugger;

    this.service.getBusiness()
    .toPromise()
    .then(res => {
      this.data = res;
    })
    .catch(err => console.dir(err));

  }

}
