import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StaticData } from '../static/static-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  constructor(private router:Router){}
  submit(){
    this.router.navigate(['menu']);
  }
}
