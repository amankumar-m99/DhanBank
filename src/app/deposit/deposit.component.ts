import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  constructor(private router:Router){}

  submit(){}

  cancel(){
    this.router.navigate(['home']);
  }
}
