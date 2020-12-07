import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnChanges {

  @Input() data: any;
  @Output() eventE = new EventEmitter();

  form: FormGroup;

  constructor() {

  }

  ngOnChanges() {



  }

  onSubmit(){
    this.eventE.emit(this.data);

  }

}
