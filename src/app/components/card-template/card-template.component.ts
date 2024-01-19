import { Component, Input, OnInit } from '@angular/core';
import { StaticData } from '../../static/static-data';
import { Card } from 'src/app/models/card/card';
import { Account } from 'src/app/models/account/account';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent implements OnInit{
  @Input() isQRDataAvailable = false;
  @Input() card = new Card(new Account());
  assetPath:string = StaticData.assetsDirPath;
  bankImg = this.assetPath.concat("imgs/bank.png");
  cardNumber:string;
  expiryMonth:number;
  expiryYear:number;
  cvv:string;
  cardHolderName:string;
  qrData:string;
  constructor(){
    this.cardNumber = this.card.cardNumber;
    this.expiryMonth = this.card.expiryMonth;
    this.expiryYear = this.card.expiryYear;
    this.cvv = this.card.cvv;
    this.qrData = this.cardNumber;
    this.cardHolderName = this.card.account.accountHolderName;
  }
  ngOnInit(): void {
    this.cardNumber = this.card.cardNumber;
    this.expiryMonth = this.card.expiryMonth;
    this.expiryYear = this.card.expiryYear;
    this.cvv = this.card.cvv;
    this.qrData = this.cardNumber;
    this.cardHolderName = this.card.account.accountHolderName;
  }
}
