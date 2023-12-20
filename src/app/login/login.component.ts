import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginFormData } from '../models/login-form-data'
import { StaticData } from '../static/static-data';
import { LoginService } from '../services/login.service';

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
  }

  submit(){
    this.loginService.getCard(this.loginFormData).subscribe(response=>{
      console.log(response);
      if(response.pin == this.loginFormData.pin){
        this.router.navigate(['menu']);
      }
    }, error=>{
      console.log("error");
      console.log(error.status);
    })
  }
}
