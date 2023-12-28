import { Component } from '@angular/core';
import { StaticData } from '../static/static-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");

  constructor(private router:Router){}

  allCards(){
    this.router.navigate(['admin/all-cards']);
  }
  
  allAccounts(){
    this.router.navigate(['admin/all-accounts']);
  }

  registerCard(){
    this.router.navigate(['admin/register-card']);
  }

  registerAccount(){
    this.router.navigate(['admin/register-account']);
  }
}
