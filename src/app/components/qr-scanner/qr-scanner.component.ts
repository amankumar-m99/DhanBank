import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { StaticData } from '../../static/static-data';
import { CardNumber } from '../../models/card/card-number';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})

export class QrScannerComponent {
  visibleQr=true;

  constructor(
    private router:Router,
    private cardService:CardService){}
  ngOnInit(){
    this.scanQR();
  }
  startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    // await BarcodeScanner.checkPermission({ force: true });
  
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    // BarcodeScanner.hideBackground();
    // const setting = await BarcodeScanner.openAppSettings();
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    // if the result has content
    document.getElementById("scanner-modal")?.classList.remove("visible-false");
    document.getElementById("scanner-modal")?.classList.add("visible-true");
    if (result.hasContent) {
      StaticData.scannedCardNumber = result.content;
      this.cardService.getCardByNumber(new CardNumber(result.content)).subscribe(responseCard=>{
        if(responseCard == null){
          StaticData.info = "Invalid card!";
          this.router.navigate(['info']);
          return;
        }
        StaticData.card = responseCard;
        StaticData.account = responseCard.account;
        if(!responseCard.isActive){
          StaticData.info = "Card is not activated. It can be used only after its activated. Kindly contact admin to activate your card.";
          this.router.navigate(['info']);
          return;
        }
        if(responseCard.isBlocked){
          StaticData.info = "Card is blocked. Kindly contact admin to unblock your card.";
          this.router.navigate(['info']);
          return;
        }
        this.router.navigate(['menu']);
      }, error=>{
        console.log(error);
        if(error.status == 404){
          StaticData.info = "Invalid card!";
        }
        else if(error.status == 0){
          StaticData.info = "Connection to server cannot be made.";
        }
        else{
          StaticData.info = "Something went wrong. Error code "+ error.status;
        }
        this.router.navigate(['info']);
      });
    }
  };
  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };
  prepare = () => {
    BarcodeScanner.prepare();
  };
  askUser = () => {
    this.prepare();
    let c = confirm('Do you want to scan a barcode?');
    if (c) {
      this.startScan();
    } else {
      this.stopScan();
    }
  };
  checkPermission = async () => {
    // check or request permission
    // alert("seeking permission");
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      return true;
    }
    else if(status.denied){
      alert("User denied camera permission");
    }
    else if(status.asked){
      alert("User was asked camera permission");
    }
    else if(status.neverAsked){
      alert("User was never asked camera permission");
    }
    else if(status.restricted){
      alert("Restricted camera permission");
    }
    else if(status.unknown){
      alert("Camera permission status can't be known");
    }
    else{
      navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        // window.localStream = stream;
        // window.localAudio.srcObject = stream;
        // window.localAudio.autoplay = true;
        true;
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
        return false;
      });
    }
    return false;
  };
  async scanQR(){
    // document.getElementById("scanner-modal")?.classList.remove("visible-true");
    // document.getElementById("scanner-modal")?.classList.add("visible-false");
    if(await this.checkPermission()){
      this.startScan();
    }
    else{
    }
  }
}
