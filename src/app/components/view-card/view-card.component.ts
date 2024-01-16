import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountById } from 'src/app/models/account/account-by-id';
import { Card } from 'src/app/models/card/card';
import { CardById } from 'src/app/models/card/card-by-id';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent {
  cardId:string;
  editCardForm:FormGroup;
  modalTitle = '';
  modalTitleStyleClass = '';
  modalBody = '';
  modalCloseBtnStyleClass = '';
  submitTextSuffix = '';
  disableSubmitBtn = false;
  card:Card|null;

  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private cardService:CardService
  ){
    this.cardId = this.activatedRoute.snapshot.params['cardId'];
    this.card=null;
    this.editCardForm = this.formBuilder.group({});
    this.cardService.getCardById(new CardById(this.cardId)).subscribe(response=>{
      this.card = response;
      this.editCardForm = this.formBuilder.group({})
      });
  }
}
