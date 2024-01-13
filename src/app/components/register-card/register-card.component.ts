import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account/account.service';
import { Utils } from '../../utils/utils';
import { AccountByNumber } from '../../models/account/account-by-number';
import { StaticData } from '../../static/static-data';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {
  validityPeriodOptions = StaticData.validityPeriodOptions;
  registerCardForm:FormGroup;
  acNumberInput:AbstractControl<any,any>;
  submitTextSuffix = '';
  disableSubmitBtn = false;
  constructor(
    private formBuilder:FormBuilder,
    private accountService:AccountService
  ){
    this.registerCardForm = this.formBuilder.group({
      acNumber: ['',Validators.required],
      validityPeriod: [5, Validators.required],
      immediateActive: [true]
    });
    this.acNumberInput = this.registerCardForm.controls['acNumber'];
  }

  submit(){
    if(!this.registerCardForm.valid){
      Utils.markAllFieldAsTouched(this.registerCardForm);
      return;
    }
    let accountNumber = this.acNumberInput.value;
    if(Utils.isStringEmpty(accountNumber) || !Utils.isStringNumeric(accountNumber)){
      alert("Invalid account number");
      return;
    }
    this.disableSubmitBtn = true;
    this.submitTextSuffix = 'ting...';
    this.performCardRegistration(accountNumber);
  }

  performCardRegistration(accountNumber:string){
    this.accountService.getAccountByAccountNumber(new AccountByNumber(accountNumber))
      .subscribe(
        response=>{
          let account = response;

          alert("This operation can't be performed at the moment as the backend is not for this." + accountNumber);
          this.registerCardForm.reset();
          this.disableSubmitBtn = false;
          this.submitTextSuffix = '';
          return;
        },
        error=>{
          this.disableSubmitBtn = false;
          this.submitTextSuffix = '';
          let errorStatus = error.status;
          
          if(errorStatus == 0){
            alert("Connection to server couldn't be made.");
          }
          else if(errorStatus == 404){
            alert("No account exists with account number " + accountNumber);
          }
          else{
            alert("Something went wrong. Can't proceed at the moment.");
          }
          return;
        }
      );
  }
}
