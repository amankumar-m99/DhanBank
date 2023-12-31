import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {
  registerCardForm:FormGroup
  validityPeriodOptions:number[] = [1,2,5,8,10];
  submitTextSuffix = '';
  disableSubmitBtn = false;
  constructor(
    private loginService:LoginService,
    private formBuilder:FormBuilder,
  ){
    this.registerCardForm = this.formBuilder.group({
      acNumber: ['',Validators.required],
      validityPeriod: [5, Validators.required],
      immediateActive: [true]
    });
  }

  submit(){
  }
}
