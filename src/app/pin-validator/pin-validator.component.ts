import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountWithdraw } from '../models/account/accountWithdraw';
import { Utils } from '../Utils';
import { AccountService } from '../services/account.service';
import { CardService } from '../services/card.service';
import { CardId } from '../models/card/card-id';

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
    private formbuilder:FormBuilder,
    private cardService:CardService
    ){
    this.menuId = this.activatedRoute.snapshot.params['menu'];
    this.pinValidatorForm = this.formbuilder.group({
      inputPin: ['',Validators.required, Validators.length]
    });
    this.inputPin = this.pinValidatorForm.controls['inputPin'];
  }

  submit(){
    if(!this.pinValidatorForm.valid){
      Utils.markAllFieldAsTouched(this.pinValidatorForm);
      return;
    }
    let enteredPin = this.inputPin.value;
    if(Utils.isStringEmpty(enteredPin)){
      alert('Empty Pin !!');
      return;
    }
    else if(!Utils.isStringNumeric(enteredPin)){
      alert('Only numeric values are allowed.');
      return;
    }
    else if(enteredPin.length < 4){
      alert('Pin cannot be smaller than 4 digits.');
      return;
    }
    else if(enteredPin.length > 4){
      alert('Pin cannot be longer than 4 digits.');
      return;
    }
    else if(StaticData.card.pin != enteredPin){
      alert("Incorrect pin");
      this.cardService.recordInValidAttemptsById(new CardId(StaticData.card.id)).subscribe(response=>{
        StaticData.card = response;
      });
      this.router.navigate(['home']);
      return;
    }
    this.cardService.resetInValidAttemptsById(new CardId(StaticData.card.id)).subscribe(response=>{
      StaticData.card = response;
    });
    this.router.navigate([this.menuId]);
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
