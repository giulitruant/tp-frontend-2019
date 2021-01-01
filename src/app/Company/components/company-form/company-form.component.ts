import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnChanges {

  @Input() data = null;
  @Output() submit = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  form = new FormGroup({
    Cuit: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) , Validators.minLength(11), Validators.maxLength(11)]),
    RazonSocial: new FormControl('', [Validators.required]),
    Provincia: new FormControl('', [Validators.required]),
    Localidad: new FormControl('', [Validators.required]),
    Domicilio: new FormControl('', [Validators.required]),
    Telefono: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email, ValidateEmail]),
  });

  constructor(
    private router: Router
  ) { }

  ngOnChanges() {
    if(this.data){
      this.setControl();

    }
  }

  setControl(){
    this.form.patchValue(this.data);

  }

  onSubmit(){

    if(this.form.invalid){
      return;
    }

    this.submit.emit(this.form.value);

  }

  cancel(){
    this.router.navigate(['/company/home']);
  }

}


export function ValidateEmail(control: AbstractControl) {
  if (!(control.value.endsWith('.com') || control.value.endsWith('.com.ar')) || !control.value.includes('@')) {
    return { validUrl: true };
  }
  return null;
}
