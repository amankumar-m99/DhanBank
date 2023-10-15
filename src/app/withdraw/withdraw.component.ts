import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  constructor(private router:Router){}

  submit(){}

  cancel(){
    this.router.navigate(['home']);
  }
}
