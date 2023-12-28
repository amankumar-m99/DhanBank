import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormData } from '../models/login-form-data'
import { StaticData } from '../static/static-data';
import { LoginService } from '../services/login.service';
import { Card } from '../models/card';
import { NgControl } from '@angular/forms';
import { Account } from '../models/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  loginFormData:LoginFormData;
  
  constructor(private router:Router, private loginService:LoginService){
    this.loginFormData = new LoginFormData("","");
    this.loginFormData.cardNumber = StaticData.scannedCardNumber;
  }

  ngOnInit(){
  }

  submit(){
    this.loginService.getCard(this.loginFormData).subscribe(response=>{
      console.log(response);
      if(response.pin == this.loginFormData.pin){
        // let account = new Account(response.account.accountNumber, ""+response.account.balance)
        // StaticData.card = new Card(response.cardNumber, response.pin, response.inValidAttempts, account);
        this.router.navigate(['menu']);
      }
    }, error=>{
      console.log("error");
      console.log(error.status);
    })
  }
}
