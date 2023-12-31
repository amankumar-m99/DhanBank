import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormData } from '../models/login-form-data';
import { LoginService } from '../services/login.service';
import { AccountWithdraw } from '../models/account/accountWithdraw';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})

export class WithdrawComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  withdrawForm:FormGroup;
  amountInput:any;
  modalTitle = '';
  modalBody = '';
  disableSubmitBtn = false;
  validMultiples:number[] = [100, 200, 500, 2000];

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private service:LoginService
    ){
    this.withdrawForm = this.formBuilder.group({
      amount:['', Validators.required]
    })
    this.amountInput = this.withdrawForm.controls['amount'];
  }

  submit(){
    if(!this.withdrawForm.valid){
      this.amountInput.markAsTouched();
      return;
    }
    let amount = this.amountInput.value;
    let isAmountValid = true;
    if(this.isStringEmpty(amount)){
      this.modalTitle = 'Amount entered is empty.';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    else if(!this.isStringNumeric(amount)){
      this.modalTitle = 'Amount entered is not pure numeric value';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    else if(this.getNumericValue(amount) < this.validMultiples[0]){
      this.modalTitle = 'Amount cannot be less than ' + this.validMultiples[0] + '.';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    else if(!this.isAmountValidMultiple(this.getNumericValue(amount))){
      this.modalTitle = 'Invalid amount';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    if(isAmountValid){
      StaticData
      this.router.navigate(['pin-validator', 'withdraw']);
    }
    else{
      ($('#withdrawAccountModal') as any).modal('show');
    }
  }

  isStringEmpty(value:string):boolean{
    if(value == null || value.length == 0){
      return true;
    }
    return false;
  }

  isStringNumeric(value:string):boolean{
    return /^\d+$/.test(value);
  }

  getNumericValue(value:string):number{
    if(this.isStringNumeric(value)){
      return parseInt(value);
    }
    return 0;
  }

  isAmountValidMultiple(amount:number):boolean{
    let result = true;
    for(let value of this.validMultiples){
      if(amount%value == 0)
      return true;
    }
    return false;
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
