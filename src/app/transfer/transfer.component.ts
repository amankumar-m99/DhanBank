import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  constructor(private router:Router){}

  submit(){}

  cancel(){
    this.router.navigate(['home']);
  }
}
