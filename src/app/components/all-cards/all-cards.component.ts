import { Component } from '@angular/core';
import { Card } from '../../models/card/card';
import { StaticData } from '../../static/static-data';
import { CardService } from '../../services/card/card.service';
import { CardId } from '../../models/card/card-id';

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

  getRowCss(card:Card){
    let obj = {
      "text-dark" : !card.isActive,
      "bg-warning": !card.isActive,
      "bg-danger" : card.isDeleted,
      "text-light": card.isDeleted
    };
    return obj;
  }

  markAsDelete(id:number){
    if(!confirm("Proceed with?"+ id)){
      return;
    }
    this.cards?.forEach(card=>{
      if(card.id == id){
        this.cardService.markCardByIdAsDeleted(new CardId(id)).subscribe(response=>{
          card.isDeleted = true;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
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
