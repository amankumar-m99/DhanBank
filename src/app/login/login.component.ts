import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormData } from '../models/login-form-data'
import { StaticData } from '../static/static-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  loginFormData:LoginFormData;

  constructor(private router:Router){
    this.loginFormData = new LoginFormData("","");
  }

  submit(){
    console.log(this.loginFormData);
    // this.router.navigate(['menu']);
  }
}
