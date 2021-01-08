import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BusLineService } from 'src/app/Service/bus-line.service';

@Component({
  selector: 'app-list-bus-line',
  templateUrl: './list-bus-line.component.html',
  styleUrls: ['./list-bus-line.component.css']
})
export class ListBusLineComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor( 
    private service: BusLineService
  ) { }

  ngOnInit(){
    
    
  }

}
