import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { DepositFormData } from '../models/deposit-form-data';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})

export class DepositComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  depositFormData:DepositFormData;

  constructor(private router:Router){
    this.depositFormData = new DepositFormData("");
  }

  submit(){
    console.log(this.depositFormData.amount);
    let previousAmount:number =parseFloat(StaticData.card.account.balance);
    let increment = parseFloat(this.depositFormData.amount);
    let currentAmount = previousAmount + increment;
    StaticData.card.account.balance = ""+currentAmount;
    this.router.navigate(['menu']);
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
