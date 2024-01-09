import { Component } from '@angular/core';
import { Card } from '../models/card/card';
import { StaticData } from '../static/static-data';
import { CardService } from '../services/card.service';

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
  showLoading = false;
  errorOccured = false;
  noData=false;

  constructor(
    private cardService:CardService
  ){
    this.setShowLoading();
    cardService.getAllCards().subscribe(response=>{
      this.cards = response;
      if(this.cards.length == 0){
        this.setNoData();
      }
      else{
        this.setDataFound();
      }
    },error=>{
      this.setErrorOccured();
    })
  }

  setShowLoading(){
    this.showLoading = true;
    this.noData = false;
    this.errorOccured = false;
  }

  setNoData(){
    this.showLoading = false;
    this.noData = true;
    this.errorOccured = false;
  }

  setDataFound(){
    this.showLoading = false;
    this.errorOccured = false;
    this.noData=false;
  }

  setErrorOccured(){
    this.showLoading = false;
    this.noData = false;
    this.errorOccured = true;
  }
}
