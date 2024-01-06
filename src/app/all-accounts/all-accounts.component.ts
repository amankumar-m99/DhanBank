import { Component } from '@angular/core';
import { Account } from '../models/account/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent {
  accounts?:Account[];
  constructor(
    private accountService:AccountService
  ){
    accountService.getAllAccounts().subscribe(response=>{
      this.accounts=response;
    }, error=>{
      console.log('Error occured while loading all accounts.', error);
    })
  }
}
