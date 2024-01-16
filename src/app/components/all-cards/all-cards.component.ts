import { Component } from '@angular/core';
import { Card } from '../../models/card/card';
import { StaticData } from '../../static/static-data';
import { CardService } from '../../services/card/card.service';
import { CardById } from '../../models/card/card-by-id';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent {
  assetPath:string = StaticData.assetsDirPath;
  emptyDataImg = this.assetPath.concat("imgs/empty-box.png");
  cards:Card[] = [];
  showLoading = false;
  errorOccured = false;
  noData=false;
  formGroup:FormGroup;
  hideDeleted:AbstractControl;

  constructor(
    private cardService:CardService,
    private formBuilder:FormBuilder,
    private router:Router
  ){
    this.setShowLoading();
    this.formGroup = this.formBuilder.group({
      hideDeleted:[false]
    });
    this.hideDeleted = this.formGroup.controls['hideDeleted'];
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

  viewCard(id:number){
    this.router.navigate(['view-card', id.toString()]);
  }
  editCard(id:number){
    this.router.navigate(['edit-card', id.toString()]);
  }

  restoreCard(id:number){
    if(!confirm("Restore card "+ id + " ?")){
      return;
    }
    this.cards?.forEach(card=>{
      if(card.id == id){
        this.cardService.unMarkCardByIdAsDeleted(new CardById(id.toString())).subscribe(response=>{
          card.isDeleted = false;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
  }

  markAsDelete(id:number){
    if(!confirm("Proceed with?"+ id)){
      return;
    }
    this.cards?.forEach(card=>{
      if(card.id == id){
        this.cardService.markCardByIdAsDeleted(new CardById(id.toString())).subscribe(response=>{
          card.isDeleted = true;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
  }

  getExpiryMonth(month:number):string{
    switch(month){
      case 1: return "January";
      case 2: return "February";
      case 3: return "March";
      case 4: return "April";
      case 5: return "March";
      case 6: return "June";
      case 7: return "July";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
    }
    return "N/A";
  }

  getBlockedQuote(isBlocked:boolean):string{
    if(isBlocked){
      return "Blocked";
    }
    return "Not Blocked";
  }
  getActivationQuote(isActive:boolean):string{
    if(isActive){
      return "Active";
    }
    return "Inactive";
  }

  getDeletionQuote(isDeleted:boolean):string{
    if(isDeleted){
      return "Deleted";
    }
    return "Not deleted";
  }
}
