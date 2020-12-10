import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    Cuit: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    RazonSocial: new FormControl('', [Validators.required]),
    Provincia: new FormControl('', [Validators.required]),
    Localidad: new FormControl('', [Validators.required]),
    Domicilio: new FormControl('', [Validators.required]),
    Telefono: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router
  ) { }

  ngOnChanges() {
    debugger;
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
