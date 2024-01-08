import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utils } from '../Utils';
import { AccountDeposit } from '../models/account/accountDeposit';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})

export class DepositComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  depositForm:FormGroup;
  amountInput:AbstractControl<any, any>;
  modalTitle = '';
  modalBody = '';
  validMultiples:number[] = [100, 200, 500, 2000];

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private accountService:AccountService
    ){
      this.depositForm = this.formBuilder.group({
        amount:['', Validators.required]
      });
      this.amountInput = this.depositForm.controls['amount'];
  }
  submit(){
    if(!this.depositForm.valid){
      Utils.markAllFieldAsTouched(this.depositForm);
      return;
    }
    let amount = this.amountInput.value;
    let isAmountValid = true;
    if(Utils.isStringEmpty(amount)){
      this.modalTitle = 'Amount entered is empty.';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    else if(!Utils.isStringNumeric(amount)){
      this.modalTitle = 'Amount entered is not pure numeric value';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    else if(Utils.getNumericValue(amount) < this.validMultiples[0]){
      this.modalTitle = 'Amount cannot be less than ' + this.validMultiples[0] + '.';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    else if(!this.isAmountValidMultiple(Utils.getNumericValue(amount))){
      this.modalTitle = 'Invalid amount';
      this.modalBody = 'Amount should be a numeric value in the multiples of 100, 200, 500 or 2000.';
      isAmountValid = false;
    }
    if(isAmountValid){
      StaticData.accountDeposit = new AccountDeposit(StaticData.account.accountNumber, amount);
      this.performDeposit();
    }
    else{
      ($('#withdrawAccountModal') as any).modal('show');
    }
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

  performDeposit(){
    this.accountService.deposit(StaticData.accountDeposit).subscribe(depositRes=>{
      StaticData.account = depositRes;
      alert("success");
      this.router.navigate(['home']);
    }, withdrawErr=>{
      alert("failed to deposit");
      this.router.navigate(['home']);
    });
  }
}
