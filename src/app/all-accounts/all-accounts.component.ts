import { Component } from '@angular/core';
import { Account } from '../models/account/account';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent {
  accounts?:Account[];
  constructor(
    private loginService:LoginService
  ){
    loginService.getAllAccounts().subscribe(response=>{
      this.accounts=response;
    }, error=>{
      console.log('Error occured while loading all accounts.', error);
    })
  }
}
