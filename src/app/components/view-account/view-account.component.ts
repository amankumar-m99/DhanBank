import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account/account';
import { AccountById } from 'src/app/models/account/account-by-id';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {
  accountId:string;
  editAccountForm:FormGroup;
  modalTitle = '';
  modalTitleStyleClass = '';
  modalBody = '';
  modalCloseBtnStyleClass = '';
  submitTextSuffix = '';
  disableSubmitBtn = false;
  account:Account|null;

  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private accountService:AccountService
  ){
    this.accountId = this.activatedRoute.snapshot.params['accountId'];
    this.account=null;
    this.editAccountForm = this.formBuilder.group({});
    this.accountService.getAccountById(new AccountById(this.accountId)).subscribe(response=>{
      this.account = response;
      this.editAccountForm = this.formBuilder.group({
        acHolderName: [this.account.accountHolderName, Validators.required],
        openingBalance: [this.account.balance, Validators.required],
        generateATM: [true],
        atmCardDetails: this.formBuilder.group({
          validityPeriod: [5, Validators.required],
          immediateActive: [true]
        })
      });
    });
  }

  submit(){
  }
}
