import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  @Input() data: any;
  @Output() event = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
