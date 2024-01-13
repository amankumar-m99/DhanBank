import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../../static/static-data';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account/account.service';
import { Utils } from '../../utils/utils';
import { FundTransferByNumber } from 'src/app/models/account/transfer/fund-transfer-by-number';
import { AccountByNumber } from 'src/app/models/account/account-by-number';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})

export class TransferComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  fundTransferForm:FormGroup;
  recAcNumInput:AbstractControl<any,any>;
  conRecAcNumInput:AbstractControl<any,any>;
  amountInput:AbstractControl<any,any>;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private accountService:AccountService
    ){
      this.fundTransferForm = this.formBuilder.group({
        receiverAcNum: ['', Validators.required],
        confirmReceiverAcNum: ['', Validators.required],
        amount: ['', Validators.required]
      });
      this.recAcNumInput = this.fundTransferForm.controls['receiverAcNum'];
      this.conRecAcNumInput = this.fundTransferForm.controls['confirmReceiverAcNum'];
      this.amountInput = this.fundTransferForm.controls['amount'];
    }

  submit(){
    if(!this.fundTransferForm.valid){
      Utils.markAllFieldAsTouched(this.fundTransferForm);
      return;
    }
    let acNum = this.recAcNumInput.value;
    let confirmAcNum = this.conRecAcNumInput.value;
    let amount = this.amountInput.value;
    if(acNum != confirmAcNum){
      alert("Account numbers do not match!");
      return;
    }
    this.performFundTransfer(acNum, amount);
  }

  performFundTransfer(recAc:string, amount:string){
    this.accountService.getAccountByAccountNumber(new AccountByNumber(recAc)).subscribe(response=>{
      let account = response;
      let proceed = confirm("Transfer Rs. "+ amount + "to " + account.accountHolderName);
      if(!proceed){
        return;
      }
      let myAccount = new AccountByNumber(StaticData.account.accountNumber);
      this.accountService.getAccountByAccountNumber(myAccount).subscribe(myAcResponse=>{
        StaticData.account = myAcResponse;
        if(StaticData.account.balance < parseInt(amount)){
          alert("Transaction failed! Insufficient balance in your account!");
          return;
        }
        this.accountService.fundTransferByNumber(new FundTransferByNumber(StaticData.account.accountNumber, recAc, amount)).subscribe(fundTransferResponse=>{
          StaticData.account=fundTransferResponse;
          alert("Successful transfer.");
          this.router.navigate(['home']);
        },fundTransferError=>{
          alert("Error "+ fundTransferError.status+". Couldn't transfer amount!");
          this.router.navigate(['home']);
        });
      });
    }, error=>{
      alert("No account exists with this account number!");
      this.router.navigate(['home']);
      }
    );
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
