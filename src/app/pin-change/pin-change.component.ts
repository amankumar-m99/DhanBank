import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticData } from '../static/static-data';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import { CardPinChange } from '../models/card/cardPinChange';
import { Utils } from '../Utils';

@Component({
  selector: 'app-pin-change',
  templateUrl: './pin-change.component.html',
  styleUrls: ['./pin-change.component.css']
})

export class PinChangeComponent {
  assetPath:string = StaticData.assetsDirPath;
  logoImgSrc = this.assetPath.concat("imgs/bank.png");
  pinChangeForm:FormGroup;
  newPinInput:any;
  confirmNewPinInput:AbstractControl<any, any>;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private cardService:CardService
    ){
      this.pinChangeForm = this.formBuilder.group({
        newPin:['', Validators.required],
        confirmNewPin:['', Validators.required]
      });
      this.newPinInput = this.pinChangeForm.controls['newPin'];
      this.confirmNewPinInput = this.pinChangeForm.controls['confirmNewPin'];
    }

  submit(){
    if(!this.pinChangeForm.valid){
      Utils.markAllFieldAsTouched(this.pinChangeForm);
      return;
    }
    let pin1 = this.newPinInput.value;
    let pin2 = this.confirmNewPinInput.value;
    if(!Utils.isStringNumeric(pin1) || !Utils.isStringNumeric(pin1)){
      alert("Non numeric value not allowed.");
      return;
    }
    if(pin1.length!=4 && pin2.length!=4){
      alert("both the pins should have 4 digit value only")
      return;
    }
    if(pin1 != pin2){
      alert("both the pin do not match!");
      return;
    }
    this.performPinChange(pin1);
  };

  performPinChange(pin:string){
    let cardPinChangeForm = new CardPinChange(StaticData.card.cardNumber, pin);
    this.cardService.changePinByNumber(cardPinChangeForm).subscribe(response=>{
      StaticData.card = response;
      alert("Pin updated successfully.");
      this.cancel();
    }, error=>{
      console.log(error);
      alert("Failed to change PIN.");
      this.cancel();
    })
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
