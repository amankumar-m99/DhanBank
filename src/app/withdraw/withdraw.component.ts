import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountWithdraw } from '../models/account/accountWithdraw';
import { AccountService } from '../services/account.service';
import { Utils } from '../Utils';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})

export class WithdrawComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  withdrawForm:FormGroup;
  amountInput:AbstractControl<any, any>;
  modalTitle = '';
  modalBody = '';
  validMultiples:number[] = [100, 200, 500, 2000];

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private accountService:AccountService
    ){
    this.withdrawForm = this.formBuilder.group({
      amount:['', Validators.required]
    })
    this.amountInput = this.withdrawForm.controls['amount'];
  }

  submit(){
    if(!this.withdrawForm.valid){
      Utils.markAllFieldAsTouched(this.withdrawForm);
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
      StaticData.accountWithdraw = new AccountWithdraw(StaticData.account.accountNumber, amount);
      this.performWithdraw();
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

  performWithdraw(){
    let amount = parseInt(StaticData.accountWithdraw.amount);
      this.accountService.getAccountByAccountNumber(StaticData.account).subscribe(response=>{
        StaticData.account = response;
        if(response.balance > amount){
          this.accountService.withdraw(StaticData.accountWithdraw).subscribe(withdrawRes=>{
            StaticData.account = withdrawRes;
            alert("success");
            this.router.navigate(['home']);
          }, withdrawErr=>{
            alert("failed to withdraw");
            this.router.navigate(['home']);
          });
        }
        else{
          alert("Insuffiecient balance");
          this.router.navigate(['home']);
        }
      }, error=>{
        alert("Couldn't fetch balance.");
        this.router.navigate(['home']);
      });
  }
}
