import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AccountAdd } from '../models/account/accountAdd';

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
    private loginService: LoginService,
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
  markTouched(group: FormGroup):void{
    Object.keys(this.registerAccountForm.controls).forEach((key: string)=>{
      const abstractControl = this.registerAccountForm.get(key);
      if (abstractControl instanceof FormGroup) {
        this.markTouched(abstractControl);
      } else {
        abstractControl?.markAsTouched();
      }
    });
  }
  submit() {
    this.acHolderName.touched=true;
    if (!this.registerAccountForm.valid) {
      this.markTouched(this.registerAccountForm);
      return;
    }
    let name = this.registerAccountForm.value.acHolderName;
    let balance = this.registerAccountForm.value.balance;
    let generateATM = this.registerAccountForm.value.generateATM;
    let accountAdd = new AccountAdd(name, balance, generateATM);
    this.disableSubmitBtn = true;
    this.submitTextSuffix = 'ting...';
    this.loginService.addAccount(accountAdd).subscribe(
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
