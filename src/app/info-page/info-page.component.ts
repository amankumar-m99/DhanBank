import { Component } from '@angular/core';
import { StaticData } from '../static/static-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent {
  constructor(private rounter:Router){}
  info = StaticData.info;
  close(){
    StaticData.info = "No Info";
    StaticData.scannedCardNumber = "";
    this.rounter.navigate(['home']);
  }
}
