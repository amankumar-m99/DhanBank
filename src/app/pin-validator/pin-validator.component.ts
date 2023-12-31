import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pin-validator',
  templateUrl: './pin-validator.component.html',
  styleUrls: ['./pin-validator.component.css']
})

export class PinValidatorComponent {
  menuId='';
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  pinValidatorForm:FormGroup;
  inputPin:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private formbuilder:FormBuilder
    ){
    this.menuId = this.activatedRoute.snapshot.params['menu'];
    this.pinValidatorForm = this.formbuilder.group({
      inputPin: ['',Validators.required, Validators.length]
    });
    this.inputPin = this.pinValidatorForm.controls['inputPin'];
  }

  submit(){
    if(!this.pinValidatorForm.valid){
      this.inputPin.markAsTouched();
      return;
    }
    // console.log(this.menuId);
    this.router.navigate([this.menuId]);
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
