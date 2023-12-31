import { Component } from '@angular/core';
import { Card } from '../models/card/card';
import { LoginService } from '../services/login.service';
import { StaticData } from '../static/static-data';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent {
  assetPath:string = StaticData.assetsDirPath;
  emptyDataImg = this.assetPath.concat("imgs/empty-box.png");
  isDataAvailable = false;
  cards?:Card[];

  constructor(
    private loginService:LoginService
  ){
    loginService.getAllCards().subscribe(response=>{
      this.cards = response;
    },error=>{
      console.log("Some error occured while loading all cards.",error);
    })
  }
}
