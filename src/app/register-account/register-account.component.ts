import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountAdd } from '../models/account/accountAdd';
import { AccountService } from '../services/account.service';
import { Utils } from '../Utils';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css'],
})
export class RegisterAccountComponent {
  registerAccountForm: FormGroup;
  acHolderName?:any;
  openingBalance?:any
  modalTitle = '';
  modalTitleStyleClass = '';
  modalBody = '';
  modalCloseBtnStyleClass = '';
  submitTextSuffix = '';
  disableSubmitBtn = false;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {
    this.registerAccountForm = this.formBuilder.group({
      acHolderName: ['', Validators.required],
      openingBalance: ['', Validators.required],
      generateATM: [true],
    });
    this.acHolderName = this.registerAccountForm.controls['acHolderName'];
    this.openingBalance = this.registerAccountForm.controls['openingBalance'];
  }

  submit() {
    this.acHolderName.touched=true;
    if (!this.registerAccountForm.valid) {
      Utils.markAllFieldAsTouched(this.registerAccountForm);
      return;
    }
    let name = this.registerAccountForm.value.acHolderName;
    let balance = this.registerAccountForm.value.openingBalance;
    let generateATM = this.registerAccountForm.value.generateATM;
    if(!Utils.isStringNumeric(balance)){
      console.log(balance);
      alert("Balance is not numeric");
      return;
    }
    let accountAdd = new AccountAdd(name, parseInt(balance), generateATM);
    this.disableSubmitBtn = true;
    this.submitTextSuffix = 'ting...';
    this.accountService.addAccount(accountAdd).subscribe(
      (response) => {
        this.modalTitle = 'Success';
        this.modalTitleStyleClass = 'text-sucess';
        this.modalCloseBtnStyleClass = 'btn-success';
        this.modalBody = 'Account registered successfully.';
        ($('#registerAccountModal') as any).modal('show');
        this.registerAccountForm.reset();
        this.disableSubmitBtn = false;
        this.submitTextSuffix = '';
      },
      (error) => {
        if (error.status == 0) {
          this.modalTitle = 'Could not connect with server!';
          this.modalBody = 'Kindly check your network connection.';
        } else {
          this.modalTitle = 'Error ' + error.status + ': ' + error.statusText;
          this.modalBody = 'Message: ' + error.message;
        }
        this.modalTitleStyleClass = 'text-danger';
        this.modalCloseBtnStyleClass = 'btn-danger';
        ($('#registerAccountModal') as any).modal('show');
        this.disableSubmitBtn = false;
        this.submitTextSuffix = '';
      }
    );
  }
}
