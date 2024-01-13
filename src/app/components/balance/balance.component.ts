import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../../static/static-data';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

export class BalanceComponent {
  balance="00.00";
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");

  constructor(private router:Router){
    this.balance = StaticData.card.account.balance.toString();
  }

  submit(){}

  cancel(){
    this.router.navigate(['home']);
  }
}
