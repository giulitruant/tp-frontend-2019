import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bus-line',
  templateUrl: './list-bus-line.component.html',
  styleUrls: ['./list-bus-line.component.css']
})
export class ListBusLineComponent implements OnInit {

  constructor( 
    private service: BusLineService
  ) { }

  ngOnInit(){
    
  }

}
