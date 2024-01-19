import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-qr-code',
  templateUrl: './card-qr-code.component.html',
  styleUrls: ['./card-qr-code.component.css']
})
export class CardQrCodeComponent {
  @Input() qrData = '';
  qrWidth = 180;
}
