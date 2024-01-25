import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account/account';
import { Card } from 'src/app/models/card/card';
import { CardById } from 'src/app/models/card/card-by-id';
import { CardService } from 'src/app/services/card/card.service';
import { StaticData } from 'src/app/static/static-data';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit, OnChanges{
  assetPath:string = StaticData.assetsDirPath;
  emptyDataImg = this.assetPath.concat("imgs/man.png");
  cardId:string = "<Card ID>";
  viewCardForm:FormGroup;
  modalTitle = '';
  modalTitleStyleClass = '';
  modalBody = '';
  modalCloseBtnStyleClass = '';
  submitTextSuffix = '';
  disableSubmitBtn = false;
  card:Card;
  account:Account;
  isQrDataAvailable = false;
  acHolderName:string="<AC Holder Name>";

  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private cardService:CardService
  ){
    this.cardId = this.activatedRoute.snapshot.params['cardId'];
    this.account = new Account();
    this.card = new Card(this.account);
    this.viewCardForm = this.formBuilder.group({
      cardNumber : [this.card.cardNumber],
        cardHolderName : [this.acHolderName],
        account : [this.card.account.accountNumber],
        expiryMonth : [this.card.expiryMonth],
        expiryYear : [this.card.expiryYear],
        cvv : [this.card.cvv],
        pin : [this.card.pin],
        blockedStatus : [this.card.isBlocked],
        deletedStatus : [this.card.isDeleted]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isQrDataAvailable = true;
  }
  ngOnInit(): void {
    this.cardService.getCardById(new CardById(this.cardId)).subscribe(response=>{
      this.card = response;
      this.account = response.account;
      this.acHolderName = response.account.accountHolderName;
      this.viewCardForm = this.formBuilder.group({
        cardNumber : [response.cardNumber],
        cardHolderName : [this.acHolderName],
        account : [this.card.account.accountNumber],
        expiryMonth : [this.card.expiryMonth],
        expiryYear : [this.card.expiryYear],
        cvv : [this.card.cvv],
        pin : [this.card.pin],
        blockedStatus : [this.card.isBlocked],
        deletedStatus : [this.card.isDeleted]
      });
      this.isQrDataAvailable = true;
    });
  }

}
