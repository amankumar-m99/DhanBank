import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../static/static-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  
  constructor(private router:Router){}

  withdraw(){
    this.router.navigate(['pin-validator', 'withdraw']);
  }
  deposit(){
    this.router.navigate(['pin-validator', 'deposit']);
  }
  transfer(){
    this.router.navigate(['pin-validator', 'transfer']);
  }
  pinChange(){
    this.router.navigate(['pin-validator', 'pin-change']);
  }
  balance(){
    this.router.navigate(['pin-validator', 'balance']);
  }
  cancel(){
    this.router.navigate(['home']);
  }
}
