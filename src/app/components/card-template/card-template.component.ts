import { Component } from '@angular/core';
import { StaticData } from '../../static/static-data';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent {
  assetPath:string = StaticData.assetsDirPath;
  bankImg = this.assetPath.concat("imgs/bank.png");
  cardNumber = "1234 5678 9012 3456";
  expiry = "04/2023"
  cvv = 123;
  cardHolderName = "card holder name";
  qrData = this.cardNumber;
  isQRDataAvailable = false;
  constructor(){}
}
